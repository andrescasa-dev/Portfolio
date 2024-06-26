
import techIcons from "@/components/icons/techIcons"
import { astroZodCollectionsToJsonSchemas } from "astro-zod-to-json-schema"
import { z, defineCollection } from "astro:content"

const technologySchema = z.object({
  name: z.string().max(20),
  // @ts-ignore
  icon: z.union(Object.keys(techIcons).map(key => z.literal(key))),
})

const techCategorySchema = z.object({
  category: z.string(),
  items: z.array(technologySchema)
})

const challengesSchema = z.object({
  title: z.string().max(40),
  solution: z.string()
})


export type Technologies = z.infer<typeof techCategorySchema>

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().max(14),
    description: z.string().max(120),
    priority: z.enum(["primary", "secondary", "tertiary", "quaternary"]),
    demo: z.string().url(),
    code: z.string().url(),
    technologies: z.array(techCategorySchema),
    main_features: z.array(z.string()),
    challenges: z.array(challengesSchema),
    what_i_learned: z.array(z.string())
  })
})

const skillSetSchema = z.object({
  // @ts-ignore
  iconName: z.union(Object.keys(techIcons).map(key => z.literal(key))),
  name: z.string(),
  clarification: z.string().optional()
});

const categorySchema = z.object({
  category: z.enum(['frontend', 'backend', 'diseño', 'tools', 'others', 'full stack', 'idiomas']),
  skillSet: z.array(skillSetSchema),
});

const skills = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    learningPhase: z.enum(['dominada', 'aprendiendo', 'competente', 'quiero aprender', 'herramientas', 'todas']),
    categories: z.array(categorySchema),
  }),
});


const journeyPeriods = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(32),
    period: z.string(),
    highlights: z.array(z.string()).max(5),
    banners: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        link: z.object({
          cta: z.string(),
          href: z.string().url()
        }).optional()
      })
    ).max(3),
  }),
});

const hobbies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(10),
    bgImage: z.string(),
    href: z.string().url(),
  })
})


export const collections = {
  'projects': projects,
  'journeyPeriods': journeyPeriods,
  'skills': skills,
  'hobbies': hobbies
}

await astroZodCollectionsToJsonSchemas(collections);
