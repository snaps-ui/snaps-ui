import { notFound } from 'next/navigation'
import { docs } from '~/.velite'
import { Box, Flex, Typography } from '@snaps-ui/react'

import { MDXContent } from '~/components/mdx-content'
import { DocsPage } from '~/components/docs-page'

type Props = {
  params: Promise<{ slug?: string[] }>
}

function getDocBySlug(slug: string) {
  return docs.find((doc) => doc.slug === slug)
}

export default async function DocsPagePage({ params }: Props) {
  const { slug: slugArr } = await params
  const slug = slugArr?.join('/') || ''
  const doc = getDocBySlug(slug)

  if (!doc) notFound()

  return (
    <DocsPage>
      <Flex gap={6} position="relative" alignItems="flex-start" py={6}>
        {/* Main content */}
        <Box flex="1" maxW="70%" px={4}>
          <article className="doc-container">
            <Typography as="h1" fontSize="2xl" fontWeight="bold" mb={2}>
              {doc.title}
            </Typography>

            {doc.description && (
              <Typography color="gray.500" mb={4}>
                {doc.description}
              </Typography>
            )}

            <MDXContent code={doc.code} />
          </article>
        </Box>

        {/* right Sidebar */}
        <Box
          width="30%"
          position="sticky"
          top="50px"
          alignSelf="flex-start"
          px={4}
          py={2}
        >
          <Typography variant="body2" fontWeight="medium" mb={2}>
            On this page
          </Typography>
          {/* headings here */}
          <Box as={'ul'} pl={'7px'}>
            {doc.toc?.map((heading) => (
              <Box as={'li'} key={heading.title} my={'10px'}>
                <a href={`${heading.url}`}>{heading.title}</a>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </DocsPage>
  )
}

export async function generateMetadata({ params }: Props) {
  const { slug: slugArr } = await params
  const slug = slugArr?.join('/') || ''
  const doc = getDocBySlug(slug)
  if (!doc) return {}
  return { title: doc.title }
}

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug.split('/') }))
}
