import {z, defineCollection, reference} from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		author: reference('authors'),
		creationDate: z.date(),
		updatedDate: z.date(),
	}),
});

const authorCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		website: z.string().url()
	})
});

export const collections = {
	'blog': blogCollection,
	'authors': authorCollection
};