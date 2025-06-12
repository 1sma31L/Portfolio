'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { MoreNavItems } from '@/data/nav-items';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function isActive(pathname: string, itemPath: string) {
  return pathname === itemPath || pathname.startsWith(itemPath);
}

export default function BlogNavBar() {
  const pathname = usePathname() || '/';
  const [hoveredPath, setHoveredPath] = useState(pathname);
  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  return (
    <nav
      className="gap-2 justify-start relative w-full z-[10] flex items-center pt-6 text-[14px] sm:text-[16px] md:text-[18px] container px-4 md:px-0"
      id="pheader">
      {MoreNavItems.map((item) => {
        const isActiveClass = isActive(pathname, item.path);

        return (
          <Link
            key={item.path}
            className={`h-9 md:px-4 px-3 relative duration-300 transition-all rounded-sm -z-100 flex items-center ${
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
                layoutId="clickedbutton2"
                transition={{
                  type: 'spring',
                  bounce: 0.9,
                  stiffness: 150,
                  damping: 12,
                  duration: 0.3,
                }}
                style={{ originY: 'top' }}
                className="absolute inset-0 -z-10 bg-primary rounded-sm"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
