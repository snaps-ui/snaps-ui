import { defineConfig } from '@chakra-ui/react'

/////////////////////////////////////////////////////////////////////////////
// theme
import { utilities } from './utilities'
import { globalCss } from './global-css'
import { breakpoints } from './breakpoints'
import { animationStyles } from './animation-styles'
import { layerStyles } from './layer-styles'
import { conditions } from './conditions'
import { textStyles } from './text-styles'

/////////////////////////////////////////////////////////////////////////////
// theme/tokens
import { fonts } from './tokens/fonts'
import { colors } from './tokens/colors'
import { animations } from './tokens/animations'
import { aspectRatios } from './tokens/aspect-ratios'
import { blurs } from './tokens/blurs'
import { borders } from './tokens/borders'
import { durations } from './tokens/durations'
import { easings } from './tokens/easings'
import { fontSizes } from './tokens/font-sizes'
import { fontWeights } from './tokens/font-weights'
import { letterSpacings } from './tokens/letter-spacing'
import { lineHeights } from './tokens/line-heights'
import { radii } from './tokens/radius'
import { spacing } from './tokens/spacing'
import { sizes } from './tokens/sizes'
import { cursor } from './tokens/cursor'
import { zIndices } from './tokens/z'
import { keyframes } from './tokens/keyframes'

///////////////////////////////////////////////////////////////////////////////
// theme/semantic-tokens
import { semanticShadows } from './semantic-tokens/shadows'
import { semanticRadii } from './semantic-tokens/radii'
import { semanticColors } from './semantic-tokens/colors'

export const defaultTheme = defineConfig({
  preflight: true,
  cssVarsPrefix: 'chakra',
  cssVarsRoot: ':where(html, .chakra-theme)',
  utilities: utilities,
  globalCss: globalCss,
  theme: {
    breakpoints: breakpoints,
    keyframes: keyframes,
    tokens: {
      fonts: fonts,
      animations: animations,
      aspectRatios: aspectRatios,
      blurs: blurs,
      borders: borders,
      colors: colors,
      durations: durations,
      easings: easings,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      letterSpacings: letterSpacings,
      lineHeights: lineHeights,
      radii: radii,
      spacing: spacing,
      sizes: sizes,
      cursor: cursor,
      zIndex: zIndices,
    },
    semanticTokens: {
      shadows: semanticShadows,
      radii: semanticRadii,
      colors: semanticColors,
    },
    // recipes: '',
    textStyles: textStyles,
    layerStyles: layerStyles,
    animationStyles: animationStyles,
    // slotRecipes: ''
  },
  conditions: conditions,
})
