import { type SlotRecipeConfig } from '@pandacss/dev'

import { avaterSlotRecipe } from './avater.recipe'
import { cardSlotRecipe } from './card.recipe'

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  avaterSlotRecipe,
  cardSlotRecipe,
}
