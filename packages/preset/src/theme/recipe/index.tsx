import type { RecipeConfig, RecipeVariantRecord } from '@pandacss/dev'

import { buttonRecipe } from './button.recipe'
import { spinnerRecipe } from './spinner.recipe'
import { typographyRecipe } from './typograpy.recipe'
import { paperRecipe } from './paper.recipe'
import { skeletonRecipe } from './skeleton.recipe'

export const recipes: Record<
  string,
  Partial<RecipeConfig<RecipeVariantRecord>>
> = {
  buttonRecipe,
  spinnerRecipe,
  typographyRecipe,
  paperRecipe,
  skeletonRecipe,
}
