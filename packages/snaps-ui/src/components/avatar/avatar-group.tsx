'use client'

import { forwardRef } from 'react'

import { Group, type GroupProps } from '../group/index'

export interface AvatarGroupProps extends GroupProps {}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(props, ref) {
    return <Group gap="0" spaceX="-3" ref={ref} {...props} />
  }
)
