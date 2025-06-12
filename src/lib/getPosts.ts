import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { postsDirectory } from '@/constants';

export default async function getPosts() {
  // Get all files and directories
  const items = fs.readdirSync(postsDirectory);

  // Filter for only .md files and process them
  const posts = items
    .filter((item) => {
      const itemPath = path.join(postsDirectory, item);
      return fs.statSync(itemPath).isFile() && item.endsWith('.md');
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

  // Sort posts by date
  posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date).getTime();
    const dateB = new Date(b.frontMatter.date).getTime();
    return dateB - dateA;
  });

  return posts;
}

const posts = await getPosts();
export { posts };
