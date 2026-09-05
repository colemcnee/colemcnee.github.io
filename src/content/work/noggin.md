---
title: Noggin
medium: code
summary: A local desktop service that gives an LLM deterministic tools for reading a book with you, page by page.
year: "2026"
date: 2026-08-25
pinned: true
pinnedOrder: 5
role: Sole developer
tags: ["go", "mcp", "sqlite", "local-first"]
---

A study companion built on a clean division of labor: the model teaches, and this service owns
everything the model is bad at. Storage, page delivery, session state, and flashcard history
are all deterministic and local.

It runs as a system-tray application with an MCP endpoint on localhost and one canonical SQLite
database in your user data directory. Books come in through a bundled converter that renders
PDF and EPUB pages transactionally — the source file is never modified, never deleted, and
never retained in the database, and a failed import cannot leave a half-ingested book behind.

## Why tools instead of context

Handing a model a whole book and hoping is not studying. The tools are narrow on purpose:
navigate to a page, read the page you're actually on, save a checkpoint, revise a card. The
model can't lose its place, can't hallucinate a page it wasn't given, and can't quietly forget
what you covered last week — because none of that lives in the conversation.

Card revisions are immutable. Editing a card writes a new revision rather than overwriting the
old one, so a deck carries its own history of how your understanding changed.
