'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { type Assign } from '@ark-ui/react'
import type {
  HTMLStyledProps,
  RecipeVariantProps,
} from '@snaps-ui/styled-system/types'
import { tabsSlotRecipe } from '@snaps-ui/styled-system/recipes'

import { makeStyleContext } from '../../system/make-style-context'

// ─────────────────────────────────────────────
// Build context utilities for the `tabsRecipe`
// ─────────────────────────────────────────────
const { withSlotProvider, withSlotContext } = makeStyleContext(tabsSlotRecipe)

type TabsVariantProps = RecipeVariantProps<typeof tabsSlotRecipe>

// -------------------- Root --------------------
export type TabsRootProviderProps = Assign<
  Assign<HTMLStyledProps<'div'>, ArkTabs.RootProviderBaseProps>,
  TabsVariantProps
>
export const TabsRootProvider = withSlotProvider<
  HTMLDivElement,
  TabsRootProviderProps
>(ArkTabs.RootProvider, 'root')

export type TabsRootProps = Assign<
  Assign<HTMLStyledProps<'div'>, ArkTabs.RootBaseProps>,
  TabsVariantProps
>
export const TabsRoot = withSlotProvider<HTMLDivElement, TabsRootProps>(
  ArkTabs.Root,
  'root'
)

// -------------------- content --------------------
export type TabContentProps = Assign<
  HTMLStyledProps<'div'>,
  ArkTabs.ContentBaseProps
>
export const TabContent = withSlotContext<HTMLDivElement, TabContentProps>(
  ArkTabs.Content,
  'content'
)

// -------------------- indicator --------------------
export type TabIndicatorProps = Assign<
  HTMLStyledProps<'div'>,
  ArkTabs.ContentBaseProps
>
export const TabIndicator = withSlotContext<HTMLDivElement, TabIndicatorProps>(
  ArkTabs.Indicator,
  'indicator'
)

// -------------------- list --------------------
export type TabListProps = Assign<HTMLStyledProps<'div'>, ArkTabs.ListBaseProps>
export const TabList = withSlotContext<HTMLDivElement, TabListProps>(
  ArkTabs.List,
  'list'
)

// -------------------- trigger --------------------
export type TabTriggerProps = Assign<
  HTMLStyledProps<'div'>,
  ArkTabs.TriggerBaseProps
>
export const TabTrigger = withSlotContext<HTMLButtonElement, TabTriggerProps>(
  ArkTabs.Trigger,
  'trigger'
)

export { TabsContext } from '@ark-ui/react/tabs'
