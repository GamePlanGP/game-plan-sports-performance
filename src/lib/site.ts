/**
 * Site address and search-engine switch, shared by metadata, robots.txt,
 * the sitemap and structured data.
 */

/**
 * Public address of the site. Set NEXT_PUBLIC_SITE_URL once a custom domain is
 * connected; until then Vercel's production URL (or the vercel.app default).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://game-plan-sports-performance.vercel.app")
).replace(/\/$/, "");

/**
 * Pre-launch: false keeps every page out of search results (noindex) and drops
 * the sitemap from robots.txt. Flip to true at launch, once placeholders are
 * resolved and the domain is connected.
 */
export const SEARCH_INDEXING = false;
