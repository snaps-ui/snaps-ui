import { readFileSync } from 'node:fs'
import path from 'node:path'
import { Box } from '@snaps-ui/react/box'

import { getHighlighter } from '~/lib/shiki'
import { type ExampleProps } from '~/components/docs/examples/example-tabs'
import { CopyButton } from '~/components/mdx/copy-button'

interface CodeProps extends ExampleProps {
  showCopy?: boolean
}

export const ExampleCode = async (props: CodeProps) => {
  const { name, showCopy = true, scope = '' } = props
  const filePath = path.join(
    process.cwd(),
    'components/docs/examples/ui',
    scope,
    `${name}.tsx`
  )
  const code = readFileSync(filePath, 'utf-8')

  const html = await getHighlighter(code)

  return (
    <Box position={'relative'}>
      <Box
        className="code-highlight"
        dangerouslySetInnerHTML={{ __html: html }}
        css={{
          overflow: 'auto',
          borderRadius: 'md',
          p: 2,
        }}
      />
      {showCopy && (
        <Box pos="absolute" top="8" right="6">
          <CopyButton code={html} />
        </Box>
      )}
    </Box>
  )
}
