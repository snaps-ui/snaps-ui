'use client'

import type { Assign, HTMLArkProps, PolymorphicProps } from '@ark-ui/react'
import { ark } from '@ark-ui/react/factory'
import type {
  HTMLStyledProps,
  RecipeVariantProps,
} from '@snaps-ui/styled-system/types'
import { cardSlotRecipe } from '@snaps-ui/styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

// ─────────────────────────────────────────────
// Build context utilities for the `cardRecipe`
// ─────────────────────────────────────────────
const { withSlotProvider, withSlotContext } = makeStyleContext(cardSlotRecipe)

type CardVariantProps = RecipeVariantProps<typeof cardSlotRecipe>

// -------------------- Root --------------------
export type CardRootProps = Assign<
  Assign<HTMLStyledProps<'div'>, PolymorphicProps>,
  CardVariantProps
>
export const CardRoot = withSlotProvider<HTMLDivElement, CardRootProps>(
  ark.div,
  'root'
)

// -------------------- Body --------------------
export type CardBodyProps = Assign<HTMLStyledProps<'div'>, PolymorphicProps>
export const CardBody = withSlotContext<HTMLDivElement, CardBodyProps>(
  ark.div,
  'body'
)

// -------------------- Header --------------------
export type CardHeaderProps = Assign<HTMLStyledProps<'div'>, PolymorphicProps>
export const CardHeader = withSlotContext<HTMLDivElement, CardHeaderProps>(
  ark.div,
  'header'
)

// -------------------- Title --------------------
export type CardTitleProps = Assign<HTMLStyledProps<'h4'>, HTMLArkProps<'h4'>>
export const CardTitle = withSlotContext<HTMLHeadingElement, CardTitleProps>(
  ark.h4,
  'title'
)

// -------------------- Description --------------------
export type CardDescriptionProps = Assign<
  HTMLStyledProps<'div'>,
  PolymorphicProps
>
export const CardDescription = withSlotContext<
  HTMLDivElement,
  CardDescriptionProps
>(ark.div, 'description')

// -------------------- Footer --------------------
export type CardFooterProps = Assign<HTMLStyledProps<'div'>, PolymorphicProps>
export const CardFooter = withSlotContext<HTMLDivElement, CardFooterProps>(
  ark.div,
  'footer'
)
