import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const MEDIUMS = ['theater', 'painting', 'film', 'code'] as const;
export type Medium = (typeof MEDIUMS)[number];

export const MEDIUM_LABELS: Record<Medium, string> = {
  theater: 'Theater',
  painting: 'Painting',
  film: 'Film',
  code: 'Code',
};

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** Primary medium. Drives /work/medium/<medium> pages and filtering. */
    medium: z.enum(MEDIUMS),
    /** Optional extra mediums for cross-disciplinary pieces. */
    alsoIn: z.array(z.enum(MEDIUMS)).default([]),
    /** One-line summary used on cards and listings. */
    summary: z.string(),
    /** Year or range, e.g. "2024" or "2022–2024". Free text on purpose. */
    year: z.string(),
    date: z.coerce.date(),
    /** Pinned pieces surface on the homepage, lowest `pinnedOrder` first. */
    pinned: z.boolean().default(false),
    pinnedOrder: z.number().default(99),
    role: z.string().optional(),
    venue: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    externalUrl: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const log = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    /** Shown in listings and used as the RSS item description. */
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** "note" entries are shorter working notes; "post" is a full piece. */
    kind: z.enum(['post', 'note']).default('post'),
    /** Link a log entry to a work entry by its collection id (filename slug). */
    relatedWork: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, log };
