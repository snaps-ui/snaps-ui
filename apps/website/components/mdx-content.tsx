import * as runtime from 'react/jsx-runtime'
import { Kbd } from '@snaps-ui/react/kbd'

import { ExampleTabs } from '~/components/docs/examples/example-tabs'
import { ExamplePreview } from '~/components/docs/examples/example-preview'
import { ExampleCode } from '~/components/docs/examples/example-code'
import { ExampleCodeWrapper } from '~/components/docs/examples/example-code-wrapper'
import { Callout } from '~/components/mdx/callout'
import { Anchor } from '~/components/mdx/anchor'
import { Code, Pre } from '~/components/mdx/code'
import { CodeBlock } from '~/components/mdx/code-block'

const sharedComponents = {
  a: Anchor,
  kbd: Kbd,
  pre: Pre,
  code: Code,
  callout: Callout,
  ExampleTabs: ExampleTabs,
  ExamplePreview: ExamplePreview,
  ExampleCode(props: { name: string }) {
    return (
      <ExampleCodeWrapper
        maxHeight="480px"
        rounded="lg"
        height="auto"
        mb="2"
        mt="6"
      >
        <ExampleCode name={props.name} />
      </ExampleCodeWrapper>
    )
  },
  'code-block': CodeBlock,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
