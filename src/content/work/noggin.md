---
title: Noggin
medium: code
summary: Contributions to a local study service that gives an LLM deterministic tools for reading a book with you — a macOS port, EPUB import, and Adler's reading levels.
year: "2026"
date: 2026-09-03
pinned: false
pinnedOrder: 99
role: Contributor — macOS port, EPUB import, reading levels
collaborators: ["andgate"]
externalUrl: "https://github.com/andgate/guided-study-desktop-mcp"
tags: ["go", "mcp", "sqlite", "local-first", "contribution"]
---

Guided Study is andgate's project: a tray app that hands a model narrow tools — go to a page, read
the page you are on, save a checkpoint, revise a card — so the model teaches and the service owns
storage, page delivery, and session state.

I worked on four things in it. The first was a macOS port, which had been Windows-only. Then EPUB
import alongside PDF, through the same transactional converter, so a failed import cannot leave half
a book behind.

The larger piece was reading levels, taken from Mortimer Adler's *How to Read a Book*. Inspectional
reading — sizing a book up before committing to it — and analytical reading are different activities
with different questions, and the service now knows which one you are doing and leads accordingly.
