import { defineCollection, z } from "astro:content";


const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    description: z.string(),
  })
})

export const collections = {articles}