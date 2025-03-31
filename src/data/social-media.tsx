import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import React from 'react';

const SocialMedia: {
  name: string;
  url: string;
  icon: React.ReactElement;
}[] = [
  {
    name: '',
    url: 'https://github.com/1sma31L',
    icon: <FaGithub />,
  },
  {
    name: '',
    url: 'https://www.instagram.com/ismailboussekine/',
    icon: <FaInstagram />,
  },
];
export default SocialMedia;
