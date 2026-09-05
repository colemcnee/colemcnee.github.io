# personal-site

An [Astro](https://astro.build) site with two content collections — `work` (tagged by medium)
and `log` (posts and working notes).

## Commands

```
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built site
npm run check     # type-check .astro/.ts files
```

## Before you deploy

Set `site` in `astro.config.mjs` to your real domain. RSS links and canonical URLs are built
from it, and the RSS endpoint fails the build without it.

## Content

Markdown/MDX files under `src/content/`. Schemas live in `src/content.config.ts`; the filename
becomes the URL slug.

### `src/content/work/`

| Field | Required | Notes |
| --- | --- | --- |
| `title`, `summary`, `year`, `date` | yes | `year` is free text so ranges like `2022–2024` work |
| `medium` | yes | one of `theater`, `painting`, `film`, `code` |
| `alsoIn` | no | extra mediums for cross-disciplinary pieces |
| `pinned` / `pinnedOrder` | no | pinned pieces appear on the homepage, lowest order first |
| `role`, `venue`, `collaborators`, `externalUrl`, `tags` | no | shown in the entry header |
| `draft` | no | hidden in production builds, visible in `dev` |

### `src/content/log/`

| Field | Required | Notes |
| --- | --- | --- |
| `title`, `date` | yes | |
| `description` | no | used in listings and as the RSS item description |
| `kind` | no | `post` (default) or `note` for shorter entries |
| `updated`, `tags` | no | |
| `relatedWork` | no | array of work filename slugs; cross-links both directions |
| `draft` | no | hidden in production builds |

Adding a new medium means editing `MEDIUMS` and `MEDIUM_LABELS` in `src/content.config.ts` —
the schema, filter bar, and `/work/medium/*` pages all read from those.

## Routes

- `/` — pinned work plus the five most recent log entries
- `/work`, `/work/<slug>`, `/work/medium/<medium>`
- `/log`, `/log/<slug>`, `/log/rss.xml`
- `/about`
