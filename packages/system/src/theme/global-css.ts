import { defineGlobalStyles } from '@chakra-ui/react'

const empty = 'var(--chakra-empty,/*!*/ /*!*/)'

export const globalCss = defineGlobalStyles({
  '*': {
    '--ring-inset': empty,
    '--ring-offset-width': '0px',
    '--ring-offset-color': 'colors.snaps.700',
    '--ring-color': 'colors.snaps.500',
    '--ring-offset-shadow': '0 0 #0000',
    '--ring-shadow': '0 0 #0000',
    ...Object.fromEntries(
      [
        'brightness',
        'contrast',
        'grayscale',
        'hue-rotate',
        'invert',
        'saturate',
        'sepia',
        'drop-shadow',
      ].map((prop) => [`--${prop}`, empty])
    ),
    ...Object.fromEntries(
      [
        'blur',
        'brightness',
        'contrast',
        'grayscale',
        'hue-rotate',
        'invert',
        'opacity',
        'saturate',
        'sepia',
      ].map((prop) => [`--backdrop-${prop}`, empty])
    ),
    '--global-font-mono': 'fonts.mono',
    '--global-font-body': 'fonts.body',
    '--global-color-border': 'colors.snaps.50',
    '--cursor-button': 'default',
    '--radius-full': '9999px',
    '--scale-factor': '1',
    '--overlay-effect': 'blur({blurs.lg})',
    '--backdrop-effect': 'none',
    '--scrollbar-color': 'colors.stone.200',
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--scrollbar-color) transparent',
  },
  body: {
    color: 'colors.slate.900',
    bg: 'colors.stone.50',
    lineHeight: '1.5',
    colorPalette: 'red',
  },
  '*::placeholder, *[data-placeholder]': {
    color: 'colors.slate.900',
  },
  '*::selection': {
    bg: 'colors.ochre.800',
  },
})
