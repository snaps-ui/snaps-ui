'use client'

import type { Assign, HTMLArkProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import { forwardRef } from 'react'
import { styled } from '@snaps-ui/styled-system/jsx'
import { skeletonRecipe } from '@snaps-ui/styled-system/recipes'
import type { JsxStyleProps } from '@snaps-ui/styled-system/types'

const StyledSkeleton = styled(ark.div, skeletonRecipe)

export interface SkeletonProps
  extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    return <StyledSkeleton ref={ref} {...props} />
  }
)

Skeleton.displayName = 'Skeleton'
