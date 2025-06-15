import { iconKeys } from "@/constants/icon";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(
      z.object({
        icon: z.enum(iconKeys),
        tech: z.string(),
      })
    ),
    source: z.string().url().nullable(),
    demo: z.string().url().nullable(),
    img: z.string(),
  }),
});

export const collections = {
  articles,
  projects,
};
