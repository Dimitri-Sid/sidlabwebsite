import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const md = (dir: string) => glob({ pattern: '**/*.md', base: `./src/content/${dir}` });

export const collections = {
  // One file per research theme. Shown as full-width sections on the home page.
  research: defineCollection({
    loader: md('research'),
    schema: z.object({
      title: z.string(),
      question: z.string().optional(), // the italic one-liner under the title
      order: z.number().default(100),
      image: z.string().optional(), // figure shown under the text, e.g. /images/research/foo.png (file in public/)
      caption: z.string().optional(), // tagline under the figure
      citation: z.string().optional(), // small print under the caption, e.g. the paper the figure comes from
      doi: z.string().optional(), // shown as a link after the citation
      imageLink: z.string().optional(), // clicking the figure opens this (e.g. the paper on PubMed)
    }),
  }),
  people: defineCollection({
    loader: md('people'),
    schema: z.object({
      name: z.string(),
      role: z.string(), // "Principal Investigator", "PhD Student", …
      institution: z.string().optional(), // shown for affiliate labs and collaborators
      group: z.enum(['pi', 'member', 'collaborator']).default('member'), // 'collaborator' = affiliated labs and collaborators
      order: z.number().default(100),
      photo: z.string().optional(), // /images/people/name.jpg
      email: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
  }),
  publications: defineCollection({
    loader: md('publications'),
    schema: z.object({
      title: z.string(),
      authors: z.string(),
      venue: z.string(),
      year: z.number(),
      date: z.string().optional(), // YYYY-MM-DD; orders entries within a year (newest first). Falls back to title order
      pmid: z.string().optional(),
      details: z.string().optional(), // volume/pages
      preprint: z.boolean().default(false),
      doi: z.string().optional(),
      pdf: z.string().optional(),
      preprintUrl: z.string().optional(),
      code: z.string().optional(),
      data: z.string().optional(),
    }),
  }),
  // Funders and grants, shown at the bottom of the Research page.
  funding: defineCollection({
    loader: md('funding'),
    schema: z.object({
      name: z.string(), // funder, e.g. "National Institutes of Health"
      grant: z.string().optional(), // grant title / number
      url: z.string().optional(),
      logo: z.string().optional(), // /images/funding/nih.png
      order: z.number().default(100),
    }),
  }),
  // Software, datasets, protocols, teaching material. Grouped on the page by `category`.
  resources: defineCollection({
    loader: md('resources'),
    schema: z.object({
      title: z.string(),
      category: z.string(), // e.g. Software, Datasets, Protocols; groups appear in order of the lowest `order` in each
      order: z.number().default(100),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
  }),
  // Free-text pages written in Markdown (currently: join).
  pages: defineCollection({
    loader: md('pages'),
    schema: z.object({ title: z.string(), lede: z.string().optional() }),
  }),
  news: defineCollection({
    loader: md('news'),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      precision: z.enum(['day', 'month']).default('day'), // 'month' shows "January 2026" and ignores the day
      link: z.string().optional(), // press coverage: the title links here
      outlet: z.string().optional(), // press coverage: who published it, e.g. "Johns Hopkins Medicine"
    }),
  }),
};
