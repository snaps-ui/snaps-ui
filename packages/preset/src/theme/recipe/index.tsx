import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'

import { buttonRecipe } from './button.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { typographyRecipe } from './typograpy.recipe'
import { paperRecipe } from './paper.recipe'
import { skeletonRecipe } from './skeleton.recipe'
import { toastRecipe } from './toast.recipe'
import { inputRecipe } from './input.recipe'
import { kbdRecipe } from './kbd.recipe'
import { textareaRecipe } from './textarea.recipe'
import { commandInputRecipe } from './command-Input.recipe'
import { badgeRecipes } from './bagde.recipe'
import { groupRecipe } from './group.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  badgeRecipes,
  buttonRecipe,
  commandInputRecipe,
  groupRecipe,
  inputRecipe,
  kbdRecipe,
  spinnerRecipe,
  typographyRecipe,
  paperRecipe,
  skeletonRecipe,
  toastRecipe,
  textareaRecipe,
}
