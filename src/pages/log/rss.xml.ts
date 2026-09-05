import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION } from '../../consts';
import { getLogEntries } from '../../lib/content';

export async function GET(context: APIContext) {
  const entries = await getLogEntries();

  return rss({
    title: `${SITE_TITLE} — Log`,
    description: SITE_DESCRIPTION,
    // `site` comes from astro.config.mjs; the build fails without it.
    site: context.site!,
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      categories: entry.data.tags,
      link: `/log/${entry.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
