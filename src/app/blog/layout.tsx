'use client';

import AnimatedDiv from '@/components/AnimatedDiv';
import BlogNavBar from '@/components/BlogNavBar';
import { usePathname } from 'next/navigation';
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <div className="w-full">
      {pathName.split('/')[1] === 'blog' &&
        !['post', 'tag'].includes(pathName.split('/')[2]) && <BlogNavBar />}
      {children}
    </div>
  );
}
