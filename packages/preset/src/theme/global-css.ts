import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    background: 'bg.surface',
    color: 'fg.default',
    _dark: {
      colorScheme: 'dark',
    },
  },
  '*, *::before, *::after': {
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*::placeholder, *[data-placeholder]': {
    opacity: 1,
    color: 'fg.subtle',
  },
  '*::selection': {
    bg: 'colorPalette.alpha3',
  },
})
