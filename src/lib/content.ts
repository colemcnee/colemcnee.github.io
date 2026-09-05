import { getCollection, type CollectionEntry } from 'astro:content';

/** Drafts stay visible in `astro dev` and are dropped from production builds. */
const isVisible = (entry: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !entry.data.draft;

export async function getLogEntries(): Promise<CollectionEntry<'log'>[]> {
  const entries = await getCollection('log', isVisible);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getWorkEntries(): Promise<CollectionEntry<'work'>[]> {
  const entries = await getCollection('work', isVisible);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPinnedWork(): Promise<CollectionEntry<'work'>[]> {
  const entries = await getWorkEntries();
  return entries
    .filter((entry) => entry.data.pinned)
    .sort((a, b) => a.data.pinnedOrder - b.data.pinnedOrder);
}

/** All mediums a piece belongs to, primary first, with no duplicates. */
export function mediumsOf(entry: CollectionEntry<'work'>) {
  return [...new Set([entry.data.medium, ...entry.data.alsoIn])];
}
