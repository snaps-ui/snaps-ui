'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import type { ComponentProps } from '@snaps-ui/styled-system/types'

export const StyledFlex = styled(ark.div, {
  base: {
    display: 'flex',
  },
})

type FlexBaseProps = ComponentProps<typeof StyledFlex>

export interface FlexProps extends FlexBaseProps {
  inline?: boolean
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  { inline, children, ...rest },
  ref
) {
  return (
    <StyledFlex ref={ref} display={inline ? 'inline-flex' : 'flex'} {...rest}>
      {children}
    </StyledFlex>
  )
})

Flex.displayName = 'Flex'
