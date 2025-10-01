'use client'

import * as React from 'react'
import { Circle as ArkCircle } from '@snaps-ui/styled-system/jsx'
import type { ComponentProps } from '@snaps-ui/styled-system/types'

export interface CircleProps extends ComponentProps<typeof ArkCircle> {
  /**
   * Sets both width and height for a perfect circle.
   * Accepts any token from your theme (`sizes`).
   */
  size?: ComponentProps<typeof ArkCircle>['width']
}

export const Circle = React.forwardRef<HTMLDivElement, CircleProps>(
  function Circle(props, ref) {
    const { size, style, ...rest } = props

    return (
      <ArkCircle ref={ref} width={size} height={size} style={style} {...rest} />
    )
  }
)

Circle.displayName = 'Circle'
