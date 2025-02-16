import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./cases" }),
  schema: z.object({
    title: z.string(),
    coverImage: z.string()
  })
})

export const collections = { cases }