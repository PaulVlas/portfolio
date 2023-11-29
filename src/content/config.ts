import { z, defineCollection } from "astro:content";
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  heroImage: z.string(),
  badge: z.string().optional(),
  tags: z.array(z.string()).refine((items) => new Set(items).size === items.length, {
    message: "tags must be unique",
  }),
  link: z.string().url().optional(),
  linkText: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
  project: projectCollection,
};
