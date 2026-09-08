---
title: Staple
medium: code
summary: A pasteup desk in the browser — cut, tear, layer, and print a zine as a real foldable booklet.
year: "2026"
date: 2026-09-05
pinned: true
pinnedOrder: 3
role: Sole developer
tags: ["typescript", "next.js", "canvas", "zines"]
---

A zine editor that behaves like a table covered in scraps: paste in photos, tear the edges off them,
layer them, and print the result as a booklet you fold by hand. The load-bearing decision is that a
zine is a JSON scene graph and never a flattened image, which is the only reason what you see on the
canvas is what comes out of the printer. The mini-zine export imposes eight pages on one sheet —
print single-sided, fold three times, one cut along the centre crease, refold.
