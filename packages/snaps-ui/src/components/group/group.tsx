'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { cx } from '@snaps-ui/styled-system/css'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

const StyledGroup = styled(ark.div, {
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
    wrap: {
      true: { flexWrap: 'wrap' },
      false: { flexWrap: 'nowrap' },
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: true,
  },
})

type GroupBaseProps = ComponentProps<typeof StyledGroup>

export interface GroupProps extends GroupBaseProps {}

export const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  function Group(props, ref) {
    const { children, className, ...rest } = props

    return (
      <StyledGroup ref={ref} {...rest} className={cx('snaps-group', className)}>
        {children}
      </StyledGroup>
    )
  }
)
