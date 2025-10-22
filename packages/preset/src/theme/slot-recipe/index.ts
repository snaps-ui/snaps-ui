import { type SlotRecipeConfig } from '@pandacss/dev'

import { avaterSlotRecipe } from './avater.recipe'
import { cardSlotRecipe } from './card.recipe'
import { tabsSlotRecipe } from './tabs.recipe'
import { fieldSlotRecipe } from './field.recipe'
import { clipboardSlotRecipe } from './clipboard.recipe'
import { accordionSlotRecipe } from './accordion.recipe'
import { switchSlotRecipe } from './switch.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  accordionSlotRecipe,
  avaterSlotRecipe,
  cardSlotRecipe,
  clipboardSlotRecipe,
  fieldSlotRecipe,
  switchSlotRecipe,
  tabsSlotRecipe,
}
