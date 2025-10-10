import { defineCollection, z } from "astro:content";


const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    date: z.string()
  })
})

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    date: z.date(),
    status: z.enum(['Completado', 'En desarrollo', 'Planificado']).optional().default('Completado'),
    links: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
      icon: z.string()
    })),
    tags: z.array(z.string()),
    tech: z.array(z.object({
      name: z.string(),
      icon: z.string()
    })),
    author: z.string(),
    authorImg: z.string(),
    authorUrl: z.string().url(),
  })
})

const certificates = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.string()
  })
})

export const collections = {
  'articles': articles,
  'projects': projects,
  'certificates': certificates
}