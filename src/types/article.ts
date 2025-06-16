import { type CollectionEntry } from "astro:content";

export type ArticleContent = CollectionEntry<"articles">["data"];
