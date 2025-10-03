'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { ComponentProps } from '@snaps-ui/styled-system/types'
import { inputRecipe } from '@snaps-ui/styled-system/recipes'

export const Input = styled(ark.input, inputRecipe)

export type InputProps = ComponentProps<typeof Input>
