import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';
import React from 'react';
import Views from './Views';
import formatDate from '@/lib/formatDate';
function BlogCard({
  slug,
  frontMatter,
  from,
}: {
  slug: string;
  frontMatter: any;
  from?: string;
}) {
  return (
    <article className="flex flex-col gap-4 p-4 border rounded-lg w-full transition-all duration-300 hover:-translate-y-[1px] hover:translate-x-[2px] hover:shadow-md hover:border-primary/50 hover:bg-secondary/10 group bg-card">
      <Link
        href={`/blog/post/${slug}${from ? `?${from}` : ''}`}
        className="flex justify-start gap-3 p-2">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-[22px] md:text-[32px] text-foreground">
              {frontMatter.title}
            </h2>
            <GoArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-foreground" />
          </div>
          <p className="text-[12px] md:text-[16px] text-muted-foreground font-normal">
            {frontMatter.metaDescription}
          </p>
          <div>
            <p className="text-[10px] md:text-[14px] text-muted-foreground/80 font-normal">
              {formatDate(new Date(frontMatter.date).toISOString())}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
