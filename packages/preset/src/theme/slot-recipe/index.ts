import { type SlotRecipeConfig } from '@pandacss/dev'

import { avaterSlotRecipe } from './avater.recipe'
import { cardSlotRecipe } from './card.recipe'
import { tabsRecipe } from './tabs.recipe'
import { fieldRecipe } from './field.recipe'
import { clipboardSlotRecipe } from './clipboard.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  avaterSlotRecipe,
  cardSlotRecipe,
  clipboardSlotRecipe,
  fieldRecipe,
  tabsRecipe,
}
