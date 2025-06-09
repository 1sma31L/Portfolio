const projects: {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  previewLink: string;
  githubLink?: string;
}[] = [
  {
    id: 1,
    title: 'Riguelni - Freelaning Website',
    description:
      'A freelanicng website I made using Next.js, TailwindCSS and shadcn. To showcase their work and connect with clients. It features a modern design, responsive layout, and user-friendly interface.',
    techStack: [
      'TypeScript',
      'TailwindCSS',
      'React',
      'Next.js',
      'Aceternity',
      'Shadcn-ui',
      'Framer Motion',
      'Supabase',
    ],
    previewLink: 'https://riguelni.vercel.app',
  },
  {
    id: 2,
    title: 'What is trending ?',
    description:
      'Simple website to check what are the trending Movies, TV Shows and Anime.',
    techStack: [
      'TypeScript',
      'TailwindCSS',
      'React',
      'Next.js',
      'Aceternity',
      'Shadcn-ui',
      'Framer Motion',
    ],
    previewLink: 'https://what-is-trending.vercel.app/',
    githubLink: 'https://github.com/1sma31L/whats-trending',
  },
];
export default projects;
