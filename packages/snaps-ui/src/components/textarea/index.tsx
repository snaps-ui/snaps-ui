'use client'

import { Field as ArkField } from '@ark-ui/react/field'
import { styled } from '@snaps-ui/styled-system/jsx'
import { ComponentProps } from '@snaps-ui/styled-system/types'
import { textareaRecipe } from '@snaps-ui/styled-system/recipes'

export const Textarea = styled(ArkField.Textarea, textareaRecipe)

export type TextareaProps = ComponentProps<typeof Textarea>
