'use client'

import { forwardRef } from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { cx } from '@snaps-ui/styled-system/css'
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

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  function Flex(props, ref) {
    const { inline, children, className, ...rest } = props

    return (
      <StyledFlex
        ref={ref}
        display={inline ? 'inline-flex' : 'flex'}
        className={cx('snaps-flex', className)}
        {...rest}
      >
        {children}
      </StyledFlex>
    )
  }
)

Flex.displayName = 'Flex'
