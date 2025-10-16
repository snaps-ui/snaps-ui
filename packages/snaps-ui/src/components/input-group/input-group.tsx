'use client'

import * as React from 'react'
import { Box } from '@snaps-ui/styled-system/jsx'

import { Group } from '../group/index'
import { type BoxProps } from '../box/index'

export interface InputGroupProps extends Omit<BoxProps, 'direction'> {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  children: React.ReactNode
}

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup(props, ref) {
    const { leftElement, rightElement, children, ...rest } = props

    return (
      <Group ref={ref} attached {...rest}>
        {leftElement && (
          <Box
            px="3"
            color="gray.400"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {leftElement}
          </Box>
        )}

        <Box flex="1">{children}</Box>

        {rightElement && (
          <Box
            px="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="1"
          >
            {rightElement}
          </Box>
        )}
      </Group>
    )
  }
)
