import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const root = process.cwd()

function resolveContentDir(type: string, lang?: string) {
  if (lang) {
    const localizedDir = path.join(root, 'data', type, lang)
    if (fs.existsSync(localizedDir)) return localizedDir
  }
  return path.join(root, 'data', type)
}

export async function getFiles(type: string, lang?: string) {
  return fs.readdirSync(resolveContentDir(type, lang))
}

export async function getFileBySlug(type: string, slug: string, lang?: string) {
  const candidates = [
    ...(lang ? [path.join(root, 'data', type, lang, `${slug}.mdx`)] : []),
    path.join(root, 'data', type, `${slug}.mdx`),
  ]

  const filePath = candidates.find((candidate) => fs.existsSync(candidate))
  if (!filePath) {
    throw new Error(`Post not found: ${type}/${lang ? `${lang}/` : ''}${slug}.mdx`)
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  return {
    frontmatter: data,
    content,
    slug: slug || null,
  }
}

export async function getAllFilesFrontMatter(type: string, lang?: string) {
  const contentDir = resolveContentDir(type, lang)
  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.mdx'))

  const posts = files.reduce((allPosts: any[], slug: string) => {
    const source = fs.readFileSync(path.join(contentDir, slug), 'utf8')
    const { data } = matter(source)
    if (data.draft !== true) {
      allPosts.push({
        ...data,
        slug: slug.replace('.mdx', ''),
      })
    }

    return allPosts
  }, [])

  return posts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
}
