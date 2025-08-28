#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';
import matter from 'gray-matter';
import { exec as _exec } from 'child_process';
import { promisify } from 'util';
import striptags from 'striptags';
const exec = promisify(_exec);

const workspaceRoot = process.cwd();
const contentDir = path.join(workspaceRoot, 'content', 'blog');
const appBlogDir = path.join(workspaceRoot, 'src', 'app', 'blog');
const outFile = path.join(workspaceRoot, 'src', 'lib', 'blog', 'metadata.ts');

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

async function readMarkdownPosts() {
  try {
    const files = await fs.readdir(contentDir);
    const mdFiles = files.filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
    const posts = [];
    for (const file of mdFiles) {
      const full = path.join(contentDir, file);
      const raw = await fs.readFile(full, 'utf8');
      const { data, content } = matter(raw);
      const slug = data.slug || slugify(file.replace(/\.mdx?$/, ''));
      const excerpt = data.excerpt || (content.split('\n\n')[0] || '').replace(/\n/g, ' ').slice(0, 200).trim();
      posts.push({
        id: slug,
        title: data.title || slug.replace(/-/g, ' '),
        excerpt,
        publishDate: data.publishDate || (new Date()).toISOString().slice(0,10),
        author: data.author || 'Unknown',
        category: data.category || 'Blog',
        slug,
        readTime: data.readTime || '4 min read',
        image: data.image || undefined,
      });
    }
    return posts;
  } catch (e) {
    return null;
  }
}

async function fallbackFromAppPages() {
  try {
    const entries = await fs.readdir(appBlogDir, { withFileTypes: true });
    const posts = [];
    for (const dirent of entries) {
      if (!dirent.isDirectory()) continue;
      const dirPath = path.join(appBlogDir, dirent.name);
      const pageFile = path.join(dirPath, 'page.tsx');
      const metaJson = path.join(dirPath, 'meta.json');
      const metaMjs = path.join(dirPath, 'meta.mjs');
      try {
        // Prefer a meta.json or meta.mjs file if present for explicit metadata
        let meta = null;
        try {
          const statJson = await fs.stat(metaJson).catch(() => null);
          if (statJson && statJson.isFile()) {
            const rawMeta = await fs.readFile(metaJson, 'utf8');
            meta = JSON.parse(rawMeta);
          } else {
            const statMjs = await fs.stat(metaMjs).catch(() => null);
            if (statMjs && statMjs.isFile()) {
              // dynamic import
              const mod = await import(pathToFileURL(metaMjs).href);
              meta = mod.default || mod.meta || mod;
            }
          }
        } catch (e) {
          meta = null;
        }

  let title = dirent.name.replace(/-/g,' ');
        let excerpt = '';
        let publishDate = (new Date()).toISOString().slice(0,10);
        let author = 'Unknown';
        let category = 'Blog';
        let readTime = '4 min read';
        let image = undefined;

  if (meta) {
          title = meta.title || title;
          excerpt = meta.excerpt || '';
          publishDate = meta.publishDate || publishDate;
          author = meta.author || author;
          category = meta.category || category;
          readTime = meta.readTime || readTime;
          image = meta.image || image;
        } else {
          // fallback: parse page.tsx for H1 and first paragraph
          const raw = await fs.readFile(pageFile, 'utf8');
          const h1Match = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
          const pMatch = raw.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
          title = h1Match ? h1Match[1].replace(/\s+/g, ' ').trim() : title;
          excerpt = pMatch ? striptags(pMatch[1]).replace(/\s+/g,' ').trim().slice(0,200) : excerpt;
        }

        // If publishDate is still default, try to derive from git history for the page file
        if (!meta || !meta.publishDate) {
          try {
            const gitCmd = `git log --format=%aI --follow -- "${pageFile.replace(/"/g, '\\"')}"`;
            const { stdout } = await exec(gitCmd, { cwd: workspaceRoot });
            const lines = stdout.trim().split('\n').filter(Boolean);
            if (lines.length > 0) {
              // use the last entry (oldest) as the creation date
              const created = lines[lines.length - 1];
              publishDate = created.slice(0,10);
            }
          } catch (e) {
            // ignore git errors and keep publishDate as-is
          }
        }

        posts.push({
          id: dirent.name,
          title,
          excerpt,
          publishDate,
          author,
          category,
          slug: dirent.name,
          readTime,
          image,
        });
      } catch (e) {
        // skip if no page.tsx
      }
    }
    return posts;
  } catch (e) {
    return null;
  }
}

function generateTs(posts) {
  const entries = posts.map(p => {
    const imageLine = p.image ? `    image: '${p.image.replace(/'/g, "\\'")}'` : '';
    return `  '${p.slug}': {
    id: '${p.id}',
    title: '${p.title.replace(/'/g, "\\'")}',
    excerpt: '${(p.excerpt || '').replace(/'/g, "\\'")}',
    publishDate: '${p.publishDate}',
    author: '${p.author.replace(/'/g, "\\'")}',
    category: '${p.category.replace(/'/g, "\\'")}',
    slug: '${p.slug}',
    readTime: '${p.readTime}',
${imageLine ? imageLine + '\n  }' : '  }' }
`;
  }).join(',\n');

  return `export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  author: string;
  category: string;
  slug: string;
  readTime: string;
  image?: string;
}

// Blog post metadata registry (auto-generated)
export const blogPostsMetadata: Record<string, BlogPostMetadata> = {
${entries}
};
`;
}

async function main() {
  console.log('Generating blog metadata...');
  let posts = await readMarkdownPosts();
  if (!posts || posts.length === 0) {
    console.log('No markdown posts found in content/blog, falling back to src/app/blog pages...');
    posts = await fallbackFromAppPages();
  }

  if (!posts || posts.length === 0) {
    console.error('No posts found. Nothing to generate.');
    process.exit(0);
  }

  // sort by publishDate desc
  posts.sort((a,b) => new Date(b.publishDate) - new Date(a.publishDate));

  const ts = generateTs(posts);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, ts, 'utf8');
  console.log('Wrote', outFile);
}

main().catch(err => { console.error(err); process.exit(1); });
