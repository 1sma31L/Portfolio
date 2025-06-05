import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import React from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';

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
    url: 'https://www.linkedin.com/in/ismail-boussekine/',
    icon: <FaLinkedinIn />,
  },
  {
    name: '',
    url: 'https://twitter.com/i93rk',
    icon: <FaSquareXTwitter />,
  },
  {
    name: '',
    url: 'https://www.facebook.com/ismail.boussekine',
    icon: <FaFacebook />,
  },
  {
    name: '',
    url: 'https://www.instagram.com/ismailboussekine/',
    icon: <FaInstagram />,
  },
];
export default SocialMedia;
