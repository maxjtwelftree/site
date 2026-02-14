import { z } from "zod";

const experienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  start: z.string(),
  end: z.string(),
  duration: z.string(),
  emoji: z.string(),
});

export type Experience = z.infer<typeof experienceSchema>;

export async function getExperience(): Promise<Experience[]> {
  return [
    {
      role: "Software Engineer",
      company: "Fivecast",
      start: "Feb 2026",
      end: "Present",
      duration: "1 mo",
      emoji: "🧘",
    },
    {
      role: "Software Engineer Intern",
      company: "Praetorian Aeronautics",
      start: "Sep 2025",
      end: "Nov 2025",
      duration: "3 mos",
      emoji: "🦀",
    },
    {
      role: "Undergraduate Researcher",
      company: "Australian Institute for Machine Learning (AIML)",
      start: "Jul 2024",
      end: "Nov 2025",
      duration: "1 yr 5 mos",
      emoji: "👨‍🏫",
    },
    {
      role: "Software Engineer Intern",
      company: "Fivecast",
      start: "Nov 2024",
      end: "Jan 2025",
      duration: "3 mos",
      emoji: "👨‍💻",
    },
    {
      role: "Undergraduate Researcher",
      company: "MIT Media Lab",
      start: "Feb 2024",
      end: "Oct 2024",
      duration: "9 mos",
      emoji: "✍️",
    },
    {
      role: "Data Science Intern",
      company: "Decidr.ai",
      start: "Apr 2024",
      end: "Sep 2024",
      duration: "6 mos",
      emoji: "🏃",
    },
    {
      role: "Research Assistant",
      company: "University of Melbourne",
      start: "Aug 2024",
      end: "Aug 2024",
      duration: "1 mo",
      emoji: "🧠",
    },
  ];
}
