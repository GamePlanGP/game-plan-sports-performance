import type { MetadataRoute } from "next";

import { SITE_CONFIG } from "@/lib/constants";
import { SEARCH_INDEXING } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    // Crawling stays allowed so search engines can read each page's noindex tag.
    ...(SEARCH_INDEXING ? { sitemap: `${SITE_CONFIG.domain}/sitemap.xml` } : {}),
  };
}
