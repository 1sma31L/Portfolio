'use client';

import { useEffect, useState } from 'react';

import Command from '@/components/Command';
import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';
import UnderDevBar from './UnderDevBar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/more',
    name: 'More',
  },
];

function isActive(pathname: string, itemPath: string) {
  if (itemPath === '/') {
    return (
      pathname === '/' ||
      pathname.startsWith('/contact') ||
      pathname.startsWith('/projects')
    );
  }

  if (itemPath === '/blog') {
    return pathname.startsWith('/blog');
  } else if (itemPath === '/more') {
    return pathname.startsWith('/more');
  }
}

export default function NavBar() {
  const pathname = usePathname() || '/';
  const [hoveredPath, setHoveredPath] = useState(pathname);
  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <>
      <UnderDevBar />
      <header className="backdrop-blur-sm md:backdrop-blur-md sticky top-0 left-0 w-full z-[20] h-16 shadow-sm bg-background/50 border-b border-border/40">
        <div className="flex justify-between items-center container h-full mx-auto px-4 md:px-0 lg:px-0 gap-2 rounded-lg text-md">
          <nav className="gap-1 justify-start w-full flex md:gap-2 h-full items-center">
            {navItems.map((item) => {
              const isActiveClass = isActive(pathname, item.path);
              return (
                <Link
                  key={item.path}
                  className={`h-9 md:px-4 px-3 relative duration-300 rounded-sm transition-all -z-100 flex items-center ${
                    isActiveClass
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-active={isActiveClass}
                  href={item.path}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}>
                  <span>{item.name}</span>
                  {isActive(pathname, item.path) && (
                    <motion.div
                      layoutId="nav-active"
                      transition={{
                        type: 'spring',
                        bounce: 0.9,
                        stiffness: 150,
                        damping: 12,
                        duration: 0.3,
                      }}
                      style={{ originY: 'top' }}
                      className={'absolute inset-0 -z-10 bg-primary rounded-sm'}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 h-full">
            {/* <div className="hidden lg:flex items-center h-full">
              <Command />
            </div> */}
            <div className="flex items-center h-full">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
