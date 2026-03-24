import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projectSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	heroImage: z.string(),
	badge: z.string().optional(),
	tags: z
		.array(z.string())
		.refine((items) => new Set(items).size === items.length, {
			message: "tags must be unique",
		}),
	link: z.string().url().optional(),
	linkText: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;

const projectCollection = defineCollection({
	loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
	schema: projectSchema,
});

export const collections = {
	project: projectCollection,
};
