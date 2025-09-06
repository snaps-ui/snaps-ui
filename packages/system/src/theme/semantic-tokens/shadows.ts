import { defineSemanticTokens } from '@chakra-ui/react'

export const semanticShadows = defineSemanticTokens.shadows({
  xs: {
    value: {
      _light:
        '0px 1px 2px {colors.slate.900/5}, 0px 0px 1px {colors.slate.900/5}',
      _dark:
        '0px 1px 1px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  sm: {
    value: {
      _light:
        '0px 2px 4px {colors.slate.900/5}, 0px 0px 2px {colors.slate.900/5}',
      _dark:
        '0px 2px 4px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  md: {
    value: {
      _light:
        '0px 4px 8px {colors.slate.900/5}, 0px 0px 3px {colors.slate.900/5}',
      _dark:
        '0px 4px 8px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  lg: {
    value: {
      _light:
        '0px 8px 16px {colors.slate.900/5}, 0px 0px 4px {colors.slate.900/5}',
      _dark:
        '0px 8px 16px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  xl: {
    value: {
      _light:
        '0px 16px 24px {colors.slate.900/5}, 0px 0px 5px {colors.slate.900/5}',
      _dark:
        '0px 16px 24px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  '2xl': {
    value: {
      _light:
        '0px 24px 40px {colors.slate.900/10}, 0px 0px 6px {colors.slate.900/5}',
      _dark:
        '0px 24px 40px {colors.blackAlpha.300}, 0px 0px 1px inset {colors.stone.300/5}',
    },
  },
  inner: {
    value: {
      _light: 'inset 0 2px 4px 0 {colors.slate.900/5}',
      _dark: 'inset 0 2px 4px 0 {colors.black}',
    },
  },
  inset: {
    value: {
      _light: 'inset 0 1px 2px 0 {colors.slate.900/5}',
      _dark:
        'inset 0 -1px 2px 0 {colors.stone.300/4}, inset 0 0 0 1px {colors.stone.300/4}',
    },
  },
  overlay: {
    value: {
      _light:
        '0px 8px 16px {colors.slate.900/5}, 0px 0px 4px {colors.slate.900/5}, 0px 0px 1px {colors.stone.500/80}',
      _dark:
        '0px 8px 16px {colors.blackAlpha.200}, 0px 0px 3px {colors.slate.900/20}, 0px 0px 1px {colors.stone.100/80}',
    },
  },
})
