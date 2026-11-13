// Suggested by Claude Sonnet 5.5
// Tested and Approved by BenjaminFosters
import { getCollection } from "astro:content";

export const MAX_FEATURED = 4;

export async function getFeaturedWorks() {
  const featured = await getCollection("works", ({ data }) => data.featured);

  if (featured.length > MAX_FEATURED) {
    throw new Error(
      `Too many featured works (${featured.length}/${MAX_FEATURED}). ` +
        `Unflag one of: ${featured.map((w) => w.id).join(", ")}`,
    );
  }

  return featured;
}
