'use client'

import {
  type HTMLChakraProps,
  type UnstyledProp,
  type RecipeProps,
  createRecipeContext,
} from '@chakra-ui/react/styled-system'

import { type PaperVariantProps } from '@snaps-ui/system'

const { withContext, PropsProvider } = createRecipeContext({
  key: 'snapsPaper',
})

export interface PaperBaseProps
  extends RecipeProps<'snapsPaper'>,
    UnstyledProp,
    PaperVariantProps {}

export interface PaperProps extends HTMLChakraProps<'div'>, PaperBaseProps {}

export const Paper = withContext<HTMLDivElement, PaperProps>('div')

export const PaperPropsProvider =
  PropsProvider as React.Provider<PaperBaseProps>
