import { defineRecipe } from '@pandacss/dev'

export const textareaRecipe = defineRecipe({
  className: 'snaps-textarea',
  jsx: ['Textarea'],
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
      xs: {
        textStyle: 'xs',
        px: '2',
        py: '1.5',
        scrollPaddingBottom: '1.5',
      },
      sm: {
        textStyle: 'sm',
        px: '2.5',
        py: '2',
        scrollPaddingBottom: '2',
      },
      md: {
        textStyle: 'sm',
        px: '3',
        py: '2',
        scrollPaddingBottom: '2',
      },
      lg: {
        textStyle: 'md',
        px: '4',
        py: '3',
        scrollPaddingBottom: '3',
      },
      xl: {
        textStyle: 'md',
        px: '4.5',
        py: '3.5',
        scrollPaddingBottom: '3.5',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})
