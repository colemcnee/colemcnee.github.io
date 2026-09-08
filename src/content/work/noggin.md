---
title: Noggin
medium: code
summary: A local desktop service that gives an LLM deterministic tools for reading a book with you, page by page.
year: "2026"
date: 2026-09-03
pinned: true
pinnedOrder: 5
role: Sole developer
tags: ["go", "mcp", "sqlite", "local-first"]
---

A study companion split so that the model teaches and the service owns everything the model is bad
at: storage, page delivery, session state, and flashcard history. It runs as a tray app with one
SQLite file, and books come in through a converter that renders PDF and EPUB transactionally, so the
source is never modified and a failed import cannot leave half a book behind. The tools are narrow
on purpose — go to a page, read the page you are on, save a checkpoint, revise a card — so it cannot
lose your place or hallucinate a page it was not given.
