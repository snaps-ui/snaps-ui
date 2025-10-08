import fs from 'node:fs'
import path from 'node:path'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { components } from '~/mdx-components'

export default async function DocsPage({
  params,
}: {
  params: { slug?: string[] }
}) {
  const slug = params?.slug?.join('/') || 'index'
  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return notFound()

  const source = fs.readFileSync(filePath, 'utf8')

  return (
    <article className="prose mx-auto py-8">
      <MDXRemote source={source} components={components} />
    </article>
  )
}
