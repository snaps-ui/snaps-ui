'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

/* ---------------- Grid ---------------- */
export const Grid = styled(ark.div, {
  base: {
    display: 'grid',
  },
})
export type GridProps = ComponentProps<typeof Grid>

/* ---------------- GridItem ---------------- */
export const GridItem = styled(ark.div, {
  base: {
    display: 'block',
  },
})
export type GridItemProps = ComponentProps<typeof GridItem>
