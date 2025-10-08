'use client'

import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { ComponentProps } from '@snaps-ui/styled-system/types'
import { textareaRecipe } from '@snaps-ui/styled-system/recipes'

export const Textarea = styled(ark.textarea, textareaRecipe)

export type TextareaProps = ComponentProps<typeof Textarea>
