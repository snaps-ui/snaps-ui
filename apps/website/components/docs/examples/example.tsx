import { Box } from '@snaps-ui/react/box'

import { ExamplePreview } from './example-preview'
import { ExampleCodeWrapper } from './example-code-wrapper'
import { ExampleCode } from './example-code'
import { ExampleProps } from './example-tabs'

export const Example = (props: ExampleProps) => {
  const { name } = props
  if (!name) return null

  return (
    <Box
      className="example-tabs"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      divideY="1px"
    >
      <Box padding="10">
        <ExamplePreview name={name} />
      </Box>
      <ExampleCodeWrapper maxHeight="400px">
        <ExampleCode name={name} />
      </ExampleCodeWrapper>
    </Box>
  )
}
