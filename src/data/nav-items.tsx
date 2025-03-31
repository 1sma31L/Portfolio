import { MdNaturePeople, MdRateReview } from 'react-icons/md';

import { FaBook } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { TNavItem } from '@/types/types';

const BlogNavItems: TNavItem = [
  { path: '/blog', name: 'All', description: 'All my articles.' },

  {
    path: '/blog/category/tech',
    name: 'Tech',
    icon: <RiCodeSSlashFill />,
    description: 'Tech, Programming, Coding related articles.',
    keywords: ['tech', 'programming', 'coding', 'development', 'software'],
  },
  {
    path: '/blog/category/courses',
    name: 'Courses',
    icon: <FaReact />,
    description: '',
    keywords: ['learn', 'web-dev', 'fullstack', 'javascript', 'react'],
  },
  {
    path: '/blog/category/study',
    name: 'Study',
    icon: <FaBook />,
    description: 'Math, Physics, Science related articles.',
    keywords: ['science', 'math', 'physics'],
  },
  {
    path: '/blog/category/reviews',
    name: 'Reviews',
    icon: <MdRateReview />,
    description:
      'Reviews of products, services, books, movies, tv shows and more.',
    keywords: ['reviews', 'products', 'services', 'books', 'movies', 'tv'],
  },
  {
    path: '/blog/category/life',
    name: 'Life',
    icon: <MdNaturePeople />,
    description: 'Life, Personal, Self-help, Motivation related articles.',
    keywords: ['life', 'personal', 'self-help', 'motivation', 'inspiration'],
  },
];

const MoreNavItems = [
  {
    path: '/more/music',
    name: 'Music',
    icon: <MdNaturePeople />,
    description: 'Life, Personal, Self-help, Motivation related articles.',
    keywords: ['life', 'personal', 'self-help', 'motivation', 'inspiration'],
  },
  {
    path: '/more/movies-tvshows',
    name: 'Movies And Tv Shows',
    icon: <MdNaturePeople />,
    description: 'Life, Personal, Self-help, Motivation related articles.',
    keywords: ['life', 'personal', 'self-help', 'motivation', 'inspiration'],
  },
  // {
  // 	path: "/more/supported-projects",
  // 	name: "Supported Projects",
  // 	icon: <MdNaturePeople />,
  // 	description: "Life, Personal, Self-help, Motivation related articles.",
  // 	keywords: ["life", "personal", "self-help", "motivation", "inspiration"],
  // },
];
export { BlogNavItems, MoreNavItems };
