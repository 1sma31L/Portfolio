import BlogCard from '../BlogCard';
import Link from 'next/link';
import getPosts from '@/lib/getPosts';

async function LatestBlogs() {
  const posts = await getPosts();
  return (
    <section className="w-full flex flex-col">
      <Link href={'#latestblog'}>
        <h1
          className="text-4xl md:text-5xl font-bold text-center md:text-left mb-10 "
          id="latestblog">
          Latest Blog Posts
        </h1>
      </Link>
      <div className="flex flex-col gap-3">
        {posts.map(
          (post, i) =>
            i < 3 && (
              <BlogCard
                key={i}
                slug={post.slug}
                frontMatter={post.frontMatter}
              />
            )
        )}
      </div>
      <div className="self-end m-4">
        <Link
          href={'/blog'}
          className="text-muted-foreground hover:text-foreground hover:underline">
          See More &gt;&gt;&gt;
        </Link>
      </div>
    </section>
  );
}

export default LatestBlogs;
