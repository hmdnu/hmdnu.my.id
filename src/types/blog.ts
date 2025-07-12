import { type CollectionEntry } from "astro:content";

export type BlogContent = CollectionEntry<"blogs">["data"];
