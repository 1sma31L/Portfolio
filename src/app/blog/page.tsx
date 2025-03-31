import AnimatedDiv from '@/components/AnimatedDiv'
import BlogCard from '@/components/BlogCard'
import { LuPenLine } from 'react-icons/lu'
import { Metadata } from 'next'
import React from 'react'
import getPosts from '@/lib/getPosts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Discover my blog posts where I share insights, tutorials, and updates on various topics in web development, technology, and more. Stay informed and inspired by exploring my latest articles and posts.',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function Blog() {
  const posts = await getPosts()
  return (
    <AnimatedDiv id={2}>
      <main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
        <div className="flex gap-3 justify-start items-center px-2">
          <LuPenLine className="text-xl md:text-2xl" />
          <h1 className={`text-[26px] md:text-[40px] font-bold`}>Blog</h1>
        </div>
        <div className="flex flex-col justify-start items-start w-full h-full gap-4 py-4">
          {posts.map(({ slug, frontMatter }) => (
            <BlogCard key={slug} slug={slug} frontMatter={frontMatter} />
          ))}
        </div>
      </main>
    </AnimatedDiv>
  )
}
