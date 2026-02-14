import { z } from "zod";

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
      repo: "komorebi",
      link: "/zen",
      description: "A mindfulness app inspired by Thich Nhat Hanh",
    },
    {
      repo: "bin-packing",
      link: "https://github.com/maxjtwelftree/bin-packing",
      description: "Draft of a bin-packing solution under the AIML scholarship",
    },
  ];
}
