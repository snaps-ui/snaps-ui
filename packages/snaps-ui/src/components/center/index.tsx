'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

/* ---------------- Center ---------------- */
export const Center = styled(ark.div, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export type CenterProps = ComponentProps<typeof Center>
