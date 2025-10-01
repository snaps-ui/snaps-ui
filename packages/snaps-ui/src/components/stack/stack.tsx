'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

/* ---------------- Stack ---------------- */
export const Stack = styled(ark.div, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--stack-gap, 0.5rem)',
  },
})
export type StackProps = ComponentProps<typeof Stack>

/* ---------------- HStack ---------------- */
export const HStack = styled(ark.div, {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 'var(--stack-gap, 0.5rem)',
  },
})
export type HStackProps = ComponentProps<typeof HStack>

/* ---------------- VStack ---------------- */
export const VStack = styled(ark.div, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--stack-gap, 0.5rem)',
  },
})
export type VStackProps = ComponentProps<typeof VStack>
