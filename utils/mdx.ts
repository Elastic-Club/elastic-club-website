import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type: string, slug: string) {
  const source = fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(source)
  return {
    frontmatter: data,
    content,
    slug: slug || null,
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type))

  return files.reduce((allPosts: any[], slug: string) => {
    const source = fs.readFileSync(path.join(root, 'data', type, slug), 'utf8')
    const { data } = matter(source)
    if (data.draft !== true) {
      allPosts.push({
        ...data,
        slug: slug.replace('.mdx', ''),
      })
    }

    return allPosts
  }, [])
}
