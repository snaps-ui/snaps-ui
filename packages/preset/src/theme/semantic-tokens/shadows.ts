import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light:
        '0px 1px 2px {colors.gray.alpha5}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 1px 1px {colors.black.alpha12}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
  sm: {
    value: {
      _light:
        '0px 2px 4px {colors.gray.alpha3}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 2px 4px {colors.black.alpha10}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
  md: {
    value: {
      _light:
        '0px 4px 8px {colors.gray.alpha3}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 4px 8px {colors.black.alpha10}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
  lg: {
    value: {
      _light:
        '0px 8px 16px {colors.gray.alpha3}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 8px 16px {colors.black.alpha10}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
  xl: {
    value: {
      _light:
        '0px 16px 24px {colors.gray.alpha3}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 16px 24px {colors.black.alpha10}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
  '2xl': {
    value: {
      _light:
        '0px 24px 40px {colors.gray.alpha3}, 0px 0px 1px {colors.gray.alpha7}',
      _dark:
        '0px 24px 40px {colors.black.alpha10}, 0px 0px 1px inset {colors.gray.alpha7}',
    },
  },
})
