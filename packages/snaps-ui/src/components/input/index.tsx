'use client'

import { Field as ArkField } from '@ark-ui/react/field'
import { styled } from '@snaps-ui/styled-system/jsx'
import { ComponentProps } from '@snaps-ui/styled-system/types'
import { inputRecipe } from '@snaps-ui/styled-system/recipes'

export const Input = styled(ArkField.Input, inputRecipe)

export type InputProps = ComponentProps<typeof Input>
