import { FaC, FaReact } from 'react-icons/fa6';
import { FaCss3, FaGithub, FaHtml5, FaLinux, FaNode } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiArchlinux,
  SiExpress,
  SiGit,
  SiGnubash,
  SiJavascript,
  SiLatex,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';

import { IoLogoFirebase } from 'react-icons/io5';
import { TItem } from '@/types/types';
import { VscVscode } from 'react-icons/vsc';

const stack: TItem[] = [
  {
    name: 'HTML',
    icon: <FaHtml5 />,
    color: 'Orange',
  },
  {
    name: 'CSS',
    icon: <FaCss3 />,
    color: 'Blue',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: 'Yellow',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'Blue',
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
    color: 'Cyan',
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'Blue',
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
    color: 'Purple',
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
    color: 'Zinc',
  },
  {
    name: 'Node.js',
    icon: <FaNode />,
    color: 'Green',
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
    color: 'Zinc',
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
    color: 'Green',
  },
  {
    name: 'Firebase',
    icon: <IoLogoFirebase />,
    color: 'Yellow',
  },
  {
    name: 'VS Code',
    icon: <VscVscode />,
    color: 'Blue',
  },
  {
    name: 'Git',
    icon: <SiGit />,
    color: 'Red',
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    color: 'Zinc',
  },

  {
    name: 'Bash',
    icon: <SiGnubash />,
    color: 'Zinc',
  },
  {
    name: 'Linux',
    icon: <FaLinux />,
    color: 'Yellow',
  },
  {
    name: 'Arch',
    icon: <SiArchlinux />,
    color: 'Blue',
  },
  {
    name: 'C Language',
    icon: <FaC />,
    color: 'Blue',
  },
  {
    name: 'LaTeX',
    icon: <SiLatex />,
    color: 'Gray',
  },
];

export default stack;
