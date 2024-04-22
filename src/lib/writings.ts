import { z } from 'zod';

// Define a schema for individual writings
const writingSchema = z.object({
  title: z.string(),
  date: z.string(),  // ISO format date string (e.g., "2023-04-20")
  description: z.string(),
  link: z.string().optional(),  // Link to the full writing, optional
});

// Use z.infer to create a TypeScript type from the schema
export type Writing = z.infer<typeof writingSchema>;

// Mock function to return an array of writings
export async function getWritings(): Promise<Writing[]> {
  return [
    {
      title: "Understanding AI Ethics",
      date: "2024-01-15",
      link: "https://example.com/ai-ethics",
    },
    {
      title: "History of Statistical Models",
      date: "2024-03-27",
      link: "https://example.com/statistical-models",
    },
    {
      title: "The Future of Renewable Energy",
      date: "2024-04-10",
      link: "https://example.com/renewable-energy",
    },
    {
      title: "Poetry in Modern Times",
      date: "2024-02-20",
    },
  ];
}
