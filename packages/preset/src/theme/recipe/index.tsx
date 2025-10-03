import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'

import { buttonRecipe } from './button.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { typographyRecipe } from './typograpy.recipe'
import { paperRecipe } from './paper.recipe'
import { skeletonRecipe } from './skeleton.recipe'
import { toastRecipe } from './toast.recipe'
import { inputRecipe } from './input.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  buttonRecipe,
  inputRecipe,
  spinnerRecipe,
  typographyRecipe,
  paperRecipe,
  skeletonRecipe,
  toastRecipe,
}
