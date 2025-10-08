import { defineRecipe } from '@pandacss/dev'

export const inputRecipe = defineRecipe({
  className: 'snaps-input',
  jsx: ['Input', 'FloatInput'],
  base: {
    appearance: 'none',
    borderWidth: '1px',
    background: 'none',
    borderRadius: 's2',
    borderColor: 'border.default',
    color: 'fg.default',
    outline: '0',
    position: 'relative',
    width: '100%',
    minWidth: '0',
    textAlign: 'start',
    _disabled: {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
    _focus: {
      borderColor: 'colorPalette.default',
      boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
    },
    _invalid: {
      borderColor: 'fg.error',
      _focus: {
        borderColor: 'fg.error',
        boxShadow: '0 0 0 1px var(--colors-border-error)',
      },
    },
  },
  variants: {
    variant: {
      outline: {
        bg: 'bg.surface',
      },
      flushed: {
        borderRadius: '0',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
      },
      subtle: {
        bg: 'bg.subtle',
      },
    },
    size: {
      '2xs': {
        h: '7',
        minH: '7',
        textStyle: 'xs',
        px: '2',
      },
      xs: {
        h: '8',
        minH: '8',
        textStyle: 'xs',
        px: '2',
      },
      sm: {
        h: '9',
        minH: '9',
        textStyle: 'sm',
        px: '2.3',
      },
      md: {
        h: '10',
        minH: '10',
        textStyle: 'sm',
        px: '3',
      },
      lg: {
        h: '11',
        minH: '11',
        textStyle: 'md',
        px: '4',
      },
      xl: {
        h: '12',
        minH: '12',
        textStyle: 'md',
        px: '4.6',
      },
      '2xl': {
        h: '16',
        minH: '16',
        textStyle: 'lg',
        px: '5',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})
