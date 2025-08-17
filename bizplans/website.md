# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Modern UI design with animations and transitions
- ✅ Dark/Light mode support
- ✅ Fully responsive on all devices
- ✅ Built with Next.js App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ SEO optimized
- ✅ Accessible components
- ✅ GitHub Pages deployment ready
- ✅ Markdown-based blog system
- ✅ Dynamic category filtering for blog posts

## Pages

- **Home**: Modern hero section with featured projects
- **Projects**: Showcase of all projects with filtering options
- **Blog**: Markdown-based articles with blog posts and articles sections, categories, and responsive layout
- **About**: Professional biography and skills
- **Contact**: Contact form with validation

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for GitHub Pages deployment. To deploy:

1. Update the `basePath` in `next.config.mjs` with your repository name
2. Push to your GitHub repository
3. GitHub Actions will automatically build and deploy your site

## Customization

- Update personal information in the components
- Replace placeholder images with your own
- Modify color schemes in `globals.css` and `tailwind.config.ts`
- Add your own projects and blog posts

## Blog System

This portfolio includes a Markdown-based blog system that allows you to write content in Markdown format and have it automatically rendered on your site.

### Adding New Blog Posts

#### Using the Script (Recommended)

1. Make the script executable (if you haven't already):
   ```bash
   chmod +x new-post.sh
   ```

2. Run the script with your blog post title:
   ```bash
   ./new-post.sh "My New Blog Post Title"
   ```

3. This will create a new directory in `content/blog` with the format `YYYY-MM-DD-slug` and an `index.md` file inside it.

4. Edit the generated Markdown file to add your content.

#### Manual Method

1. Create a new directory in the `content/blog` folder with the format `YYYY-MM-DD-your-post-slug`
2. Inside that directory, create an `index.md` file
3. Add the following frontmatter at the top of the file:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post."
date: "YYYY-MM-DD"
author: "Your Name"
category: "Category"
tags: ["Tag1", "Tag2", "Tag3"]
blogpost: false
coverImage: "/images/blog/your-post-slug-cover.jpg"
---

# Your Blog Post Title

Your content goes here...
```

### Blog Post Formatting

- **Title**: The title of your blog post
- **Excerpt**: A brief description shown in blog previews
- **Date**: Publication date in YYYY-MM-DD format (used for sorting, not displayed on site)
- **Author**: Your name
- **Category**: Main category for the post (used for filtering)
- **Tags**: Array of tags related to the post (used for filtering)
- **Blogpost**: Boolean (true/false) to determine if post appears in the Blog Posts section (true) or Articles section (false)
- **CoverImage**: Path to the cover image (place images in `public/images/blog/`)

### Adding Images

Place your blog post images in the `public/images/blog/` directory. You can reference them in your Markdown like this:

```markdown
![Alt text](/images/blog/your-image.jpg)
```

### Markdown Features

The blog system supports:

- Standard Markdown syntax
- GitHub Flavored Markdown (tables, strikethrough, etc.)
- Code syntax highlighting
- Headings and subheadings
- Lists and blockquotes
- Links and images

### Testing Blog Posts

Use the included test script to verify your blog posts render correctly:

```bash
./test-blog.sh
```

This will build the site and start a local server so you can preview how your blog posts will look when deployed.

### Blog System Architecture

The blog system is built with the following components:

1. **Content Storage**: Blog posts are stored as Markdown files in `content/blog/` with date-prefixed directories
2. **Data Processing**:
   - `lib/posts.ts`: Contains utility functions to read and parse Markdown files
   - Uses `gray-matter` to extract frontmatter metadata
   - Uses `remark` and `remark-html` to convert Markdown to HTML
   - Calculates reading time automatically
3. **Rendering**:
   - `/blog` page: Displays all posts with blog posts at the top and articles below
   - `/blog/[slug]` dynamic route: Renders individual blog posts
   - Tailwind Typography plugin for styling Markdown content
4. **Static Generation**:
   - `generateStaticParams` functions ensure all posts are pre-rendered at build time
   - Compatible with static exports for GitHub Pages

For more detailed blog system documentation, see [BLOG.md](BLOG.md).

## License

MIT
