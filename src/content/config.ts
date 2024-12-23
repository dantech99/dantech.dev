import { defineCollection, z } from "astro:content";


const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    description: z.string(),
    date: z.string()
  })
})

export const collections = {
  'articles': articles
}