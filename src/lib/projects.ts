import { z } from 'zod';

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// export async function getProjects(
//   number: 1 | 2 | 3 | 4 | 5 | 6,
// ): Promise<Project[]> {
//   const res = await fetch("https://gh-pinned.vercel.app/api/user/nexxeln").then(
//     res => res.json(),
//   )

//   const projects = projectSchema.array().parse(res)

//   return projects.slice(0, number)
// }

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "kuma-ui",
      link: "https://github.com/kuma-ui/kuma-ui",
      description: "A headless, utility-first, zero-runtime UI component library",
    },
    {
      repo: "facial-recognition-system",
      link: "https://github.com/maxjtwelftree",
      description: "Designing a facial recognition system in Django",
    },
    {
      repo: "maxjtwelftree.dev",
      link: "https://github.com/maxjtwelftree/maxjtwelftree.dev",
      description: "This small site built with Astro",
    },
    {
      repo: "lexi-learn",
      link: "https://github.com/maxjtwelftree",
      description: "A react native application aiding dyslexic students difficulties",
    },
    {
      repo: "painter.io",
      link: "https://github.com/vas-byte/Painter.IO",
      description: "A bird's-eye-view paintball battle royale",
    },
    {
      repo: "french-fusion",
      link: "https://github.com/maxjtwelftree/French-Fusion",
      description: "A language learning application, challenging French learners",
    },
  ];
}