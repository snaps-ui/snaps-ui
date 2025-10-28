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
import { floatLabelRecipe } from './float-label.recipe'
import { inputGroupRecipe } from './input.group'
import { inputAddonRecipe } from './input-addon.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  badgeRecipes,
  buttonRecipe,
  commandInputRecipe,
  floatLabelRecipe,
  groupRecipe,
  inputRecipe,
  inputGroupRecipe,
  inputAddonRecipe,
  kbdRecipe,
  spinnerRecipe,
  typographyRecipe,
  paperRecipe,
  skeletonRecipe,
  toastRecipe,
  textareaRecipe,
}
