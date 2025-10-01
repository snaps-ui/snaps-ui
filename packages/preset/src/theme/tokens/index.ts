import { defineTokens } from '@pandacss/dev'

import { animations } from './animations'
import { borders } from './borders'
import { blurs } from './blurs'
import { colors } from './colors'
import { durations } from './durations'
import { easings } from './easings'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { radii } from './radii'
import { zIndex } from './z-index'
import { fonts } from './typography/fonts'
import { fontSizes } from './typography/font-sizes'
import { fontWeights } from './typography/font-weights'
import { letterSpacings } from './typography/letter-spacings'
import { lineHeights } from './typography/line-heights'

export const tokens = defineTokens({
  animations,
  blurs,
  borders,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  spacing,
  zIndex,
})
