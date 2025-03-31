import fs from 'node:fs'
import matter from 'gray-matter'
import { postsDirectory } from '@/constants'
export default async function getPosts() {
  const files = fs.readdirSync(postsDirectory)
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`${postsDirectory}/${fileName}`, 'utf-8')
    const { data: frontMatter } = matter(readFile)
    return {
      slug,
      frontMatter,
    }
  })
  posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date).getTime()
    const dateB = new Date(b.frontMatter.date).getTime()
    return dateB - dateA
  })
  return posts
}
const posts = await getPosts()
export { posts }
