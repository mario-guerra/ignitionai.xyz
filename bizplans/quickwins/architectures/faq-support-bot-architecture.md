# FAQ & Support Bot (Smart Answers) — Architecture Spec

Purpose
- Build a document-backed FAQ bot that can be deployed as a web chat widget and an internal Slack/Teams assistant. The bot answers using a RAG (Retrieve-and-Generate) approach and provides source citations.

Contract
- Inputs: user query (text), optional user metadata (account ID, tier).
- Outputs: answer text, source citations (document id + snippet location), confidence score, recommended escalation action.

Core components
1. Ingest & Indexer
   - Document extraction jobs for docs, PDFs, knowledge articles, and transcripts.
   - Text chunking and embedding generation (semantic vectors).
   - Vector store (e.g., Pinecone, Azure Cognitive Search, Milvus, Weaviate).
2. Retriever
   - Query embedding + nearest-neighbor search to fetch top-K relevant chunks.
3. RAG Generator
   - LLM adapter that consumes retrieved chunks and query to generate the answer with citations.
   - Answer formatter enforces “I don’t know” fallback when evidence insufficient.
4. Chat API & UI
   - Chat session store (history short-term), web chat widget, Slack/Teams adapter.
5. Admin & Editor
   - Tool for editors to mark correct/incorrect answers, curate FAQ, and push updates.
6. Analytics
   - Track deflection rate, answer accuracy, session volume, top queries.

Data model
- documents(id, title, source, uploaded_at, metadata)
- chunks(id, document_id, text, embedding_id, token_count)
- sessions(id, user_id, started_at)
- analytics(query, session_id, top_chunks, answer_text, feedback)

Sequence flow
1. Content ingestion: extract text, split into chunks, create embeddings, store in vector DB.
2. User asks question: system creates query embedding and retrieves top-K chunks.
3. The RAG generator constructs a prompt: system instructions + chunks + user query and calls LLM.
4. LLM returns answer; system attaches citations (source doc + snippet ID) and returns to UI.
5. User can provide feedback; feedback goes to editor UI and analytics for retraining/curation.

Indexing & chunking rules
- Chunk size: ~500 tokens (or 200–800 words depending on tokenizer).
- Overlap: 20% overlap to preserve context.
- Metadata: include doc type, last updated, author, and category.

Model & prompt safety
- Always include retrieved chunks explicitly and instruct model to answer only from provided chunks.
- Provide a strict fallback: "If the answer can't be found in the sources, respond: 'I don't have enough info — would you like to contact support?'"
- Limit LLM output length and enforce citation format.

Integrations
- Vector DB: Pinecone, Azure Cognitive Search, or Milvus.
- LLM: OpenAI/Azure OpenAI or private model endpoint.
- Chat: WebSocket or REST for web widget; Slack/Teams via their bot APIs.
- Storage: Blob storage for original documents and attachments.

Infrastructure
- Indexing pipeline as serverless jobs or containerized workers.
- Vector store as managed service or self-hosted.
- Backend API (Node/Python) for chat orchestration.
- Frontend: React widget that can be embedded or a lightweight page.

Security & compliance
- PII: redaction step during ingestion for sensitive fields.
- Access control: restrict which documents are indexed per tenant.
- Logging: store query logs with hashed user ids; redact PII in logs.

Testing & acceptance
- Unit: embedding generation, chunking, retrieval logic.
- Integration: Ingest sample docs → query returns relevant chunk list; RAG returns answers matching test oracle.
- Acceptance: For a test set of 100 queries, target 80% precision on top-1 citation and acceptable answer quality per editor review.

Monitoring & metrics
- Deflection rate, answer latency, retrieval hit rate, user feedback scores.
- Alert on indexing failures, vector DB errors, or increased "I don't know" responses.

Developer tasks (step-by-step)
1. Scaffold services and CI/CD.
2. Implement ingestion: PDF -> text -> chunk -> embedding; store chunks & embeddings.
3. Wire vector DB and retrieval API.
4. Implement RAG orchestration calling LLM.
5. Build web chat widget + minimal backend sessions.
6. Add editor UI for feedback and content curation.
7. Add analytics dashboard for KPIs.

Estimated effort
- MVP (single tenant, web chat, small doc set): 3–4 weeks.
- Production: 6–10 weeks (multi-tenant, editor tools, analytics).

Notes & best practices
- Start with a small curated document set and conservative fallback to avoid hallucinations.
- Keep logs for human review and continuous curation.
- Make ingestion repeatable and idempotent to simplify updates.

