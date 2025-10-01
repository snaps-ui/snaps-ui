'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

export const Box = styled(ark.div)

export type BoxProps = ComponentProps<typeof Box>
