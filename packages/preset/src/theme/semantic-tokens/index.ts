import { defineSemanticTokens } from '@pandacss/dev'
import { colors } from './colors'
import { shadows } from './shadows'
import { radii } from './radii'

export const semanticTokens = defineSemanticTokens({
  colors,
  shadows,
  radii,
})
