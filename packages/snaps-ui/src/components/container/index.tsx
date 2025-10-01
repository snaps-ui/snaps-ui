'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

/* ---------------- Container ---------------- */
export const Container = styled(ark.div, {
  base: {
    width: '100%',
    mx: 'auto',
    px: '4',
    maxW: 'container.lg',
  },
})
export type ContainerProps = ComponentProps<typeof Container>
