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
      repo: "MIT Media Lab research",
      link: "https://github.com/zlshinnick/ai-safety",
      description: "Exploring and adapting safety within AI systems",
    },
    {
      repo: "kuma-ui",
      link: "https://github.com/kuma-ui/kuma-ui",
      description: "Adding some missing features to an amazing UI component library",
    },
    {
      repo: "statistical arbitrage fun",
      link: "https://github.com/maxjtwelftree/Statistical-Arbitrage-Neural-Network",
      description: "Attempted to build a neural network that traded on a BP/XOM spread",
    },
    {
      repo: "lexi-learn",
      link: "https://github.com/maxjtwelftree",
      description: "A react native application built with my younger sister for dyslexic students",
    },
    {
      repo: "painter.io",
      link: "https://github.com/vas-byte/Painter.IO",
      description: "Developed a bird's-eye-view paintball battle royale",
    },
    {
      repo: "french-fusion",
      link: "https://github.com/maxjtwelftree/French-Fusion",
      description: "A language learning application, challenging French learners",
    },
  ];
}