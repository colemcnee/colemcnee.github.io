---
title: pango-bluesky
medium: code
summary: A small daemon that posts one used book a day from a PangoBooks shop to Bluesky.
year: "2026"
date: 2026-07-07
role: Sole developer
tags: ["python", "automation", "small-tools"]
---

Picks a listing from a PangoBooks bookstore that hasn't been posted yet, and publishes it to
Bluesky as a link card with the cover image.

It has no database. To remember what it has already posted, it reads back the account's own
recent posts — the timeline *is* the state. Pure Python standard library, no dependencies,
which means it will still run in five years without a single thing to reinstall.

Hashtags go in a reply rather than the post body, so the blurb gets the full character budget
and the post itself stays clean.
