import { join } from 'node:path'
import rehypeShiki from '@shikijs/rehype'
import { defineCollection, defineConfig, s } from 'velite'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'

// Docs collection
const docs = defineCollection({
  name: 'Docs',
  pattern: ['docs/**/*.mdx'],
  schema: s
    .object({
      title: s.string(),
      description: s.string().optional(),
      metadata: s.metadata(),
      content: s.markdown(),
      toc: s.toc(),
      code: s.mdx(),
      links: s
        .object({
          source: s.string().optional(),
          storybook: s.string().optional(),
          recipe: s.string().optional(),
          ark: s.string().optional(),
        })
        .optional(),
    })
    .transform((data, { meta }: any) => ({
      ...data,
      slug: meta.path.replace(/.*\/docs\//, '').replace(/\.mdx$/, ''),
      category: meta.path.replace(/.*\/docs\//, '').replace(/\/[^/]*$/, ''),
    })),
})

export default defineConfig({
  root: join(process.cwd(), './content'),
  collections: { docs },
  mdx: {
    remarkPlugins: [remarkDirective, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          transformers: [
            transformerNotationDiff(),
            transformerNotationFocus(),
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
          ],
          theme: 'github-dark-dimmed',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
          },
        },
      ],
    ],
  },
})
