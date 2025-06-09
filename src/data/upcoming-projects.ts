const upcomingProjects: {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  previewLink: string;
  githubLink: string;
}[] = [
  {
    id: 0,
    title: 'Aletheum',
    description:
      'A reflective journaling app that delivers daily philosophical quotes and uses AI to help users track and understand their moods and inner themes.',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'tRPC',
      'Drizzle',
      'Auth.js',
      'Shadcn-ui',
    ],
    previewLink: 'https://aletheum.vercel.app/',
    githubLink: 'https://github.com/1sma31L/Aletheum',
  },
];
export default upcomingProjects;
