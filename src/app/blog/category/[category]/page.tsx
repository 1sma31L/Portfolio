import AnimatedDiv from '@/components/AnimatedDiv';
import { BiCategory } from 'react-icons/bi';
import BlogCard from '@/components/BlogCard';
import { BlogNavItems } from '@/data/nav-items';
import Capitalize from '@/lib/Capitalize';
import { Metadata } from 'next';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { postsDirectory } from '@/constants';
import path from 'path';

type tParams = Promise<{ category: string }>;

export async function generateMetadata({
  params,
}: {
  params: tParams;
}): Promise<Metadata> {
  const category = Capitalize((await params).category.split('-').join(' '));

  return {
    title: `${category}${
      category.lastIndexOf('s') === category.length - 1
        ? "' Category"
        : "'s Category"
    } | Blog`,
    description: `${
      BlogNavItems.filter((item) => item.name === category)[0].description
    }`,
    keywords: [
      category,
      'blog',
      'articles',
      ...(BlogNavItems.filter((item) => item.name === category)[0].keywords ||
        []),
    ],
  };
}

export async function generateStaticParams(): Promise<{ category: string }[]> {
  const categoryArray = BlogNavItems.map((item) => ({
    category: item.name.toLowerCase().replace(/\s+/g, '-'),
  }));
  return categoryArray;
}

async function getPostsByCategory(category: string) {
  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      return !fs.statSync(filePath).isDirectory() && fileName.endsWith('.md');
    })
    .map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(
        `${postsDirectory}/${fileName}`,
        'utf-8'
      );
      const { data: frontMatter } = matter(readFile);
      return {
        slug,
        frontMatter,
      };
    });
  const filteredPosts = posts
    .filter((post) =>
      post.frontMatter.categories?.includes(Capitalize(category))
    )
    .sort((a, b) => {
      const dateA = new Date(a.frontMatter.date).getTime();
      const dateB = new Date(b.frontMatter.date).getTime();
      return dateB - dateA;
    });
  return filteredPosts;
}

export default async function Tag({ params }: { params: tParams }) {
  const oldCategory = (await params).category;
  const category = Capitalize((await params).category.split('-').join(' '));
  const posts = await getPostsByCategory(category);
  return (
    <AnimatedDiv id={2}>
      <main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px] py-6 px-4 sm:px-0">
        <div className="flex gap-3 justify-start items-center px-2">
          {BlogNavItems.filter(
            (item) => item.name.toLowerCase() === category.toLowerCase()
          ).map((item) => {
            return (
              <div key={item.name} className="mb-1">
                {item.icon}
              </div>
            );
          }) || <BiCategory />}
          <h1 className={`text-[26px] md:text-[40px] font-bold`}>{category}</h1>
        </div>
        {posts.length > 0 ? (
          <div className="flex flex-col justify-start items-start w-full h-full gap-4 py-4">
            {posts.map(({ slug, frontMatter }) => (
              <BlogCard
                key={slug}
                slug={slug}
                frontMatter={frontMatter}
                from={`category=${oldCategory}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-md font-bold text-left py-10 px-2">
            No blog posts found for &quot;{category}&quot;...
          </p>
        )}
      </main>
    </AnimatedDiv>
  );
}
