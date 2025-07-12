import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    source: z.string().url().nullable(),
    demo: z.string().url().nullable(),
    img: z.string().nullable(),
    createdDate: z.coerce.date(),
  }),
});

export const collections = {
  articles,
  projects,
};
