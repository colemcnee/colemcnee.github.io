---
title: Staple
medium: code
summary: A pasteup desk in the browser — cut, tear, layer, and print a zine as a real foldable booklet.
year: "2026"
date: 2026-07-07
pinned: true
pinnedOrder: 3
role: Sole developer
tags: ["typescript", "next.js", "canvas", "zines"]
---

Staple is a zine editor that behaves like a table covered in scraps. You paste in photos, tear
the edges off them, layer them, and print the result as a booklet you fold by hand.

The load-bearing decision is that a zine is a JSON scene graph, never a flattened image —
`Zine → Page[] → Layer[]`. Editing, reading, PDF export, and (eventually) remixing all read
the same document, which is the only reason what you see on the canvas is what comes out of
the printer.

## The tearing

Every torn edge is a rectangle perimeter walked at 16-pixel steps with seeded perpendicular
jitter, so a tear stays put across saves instead of reshuffling itself every render. It draws
as a soft shadow, then a white "fiber" base, then the paper color inset slightly — which is
what sells it as paper rather than a jagged polygon. The same generated path becomes a clip
mask when you tear a photo instead of a paper box.

## Cutouts, and a shortcut

There is an in-browser background remover for pulling a subject out of a photo. There is also
a better version of it that took zero code: press-and-hold a subject in iOS Photos, copy, and
paste into the editor. Safari hands over a transparent PNG with an Apple-quality mask. Most of
the work was noticing it already worked.

## Printing

The mini-zine export imposes all eight pages on one landscape letter sheet — print
single-sided, fold in half three times, one cut along the center crease, refold. The
imposition math is verified against actual paper and lives in exactly one file, which I do not
touch.

## The social part

Publishing and shared racks are optional; without a Supabase project configured, the app is
fully local and the features simply aren't there. What exists is deliberately thin:
chronological, curatorial, and with no comments, DMs, notifications, or feed ranking. A rack
is a corkboard for a scene, not an audience.
