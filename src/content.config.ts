// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

import { CustomIcons } from "./lib/icons";

// 4. Define a `loader` and `schema` for each collection
const works = defineCollection({
  loader: glob({
    base: "./works",
    pattern: ["**/*.{md,mdx}", "!_template/**"],
  }),
  schema: ({ image }) => {
    return z
      .object({
        title: z.string(),
        description: z.string(),
        acknowledgements: z.string().optional(),
        type: z.enum(["Software", "Graphic Design", "UI/UX"]),
        links: z
          .array(
            z.object({
              label: z.string(),
              url: z.url(),
              primary: z.boolean().default(false),
              icon: z
                .enum(
                  Object.keys(CustomIcons) as [
                    keyof typeof CustomIcons,
                    ...(keyof typeof CustomIcons)[],
                  ],
                )
                .default("link"),
            }),
          )
          .default([]),
        license: z.string().default("No License Specified"),
        cover: image(),
        coverAlt: z.string().max(140),
        featured: z.boolean().default(false),
      })
      .strict();
  },
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { works };
