import { defineRecipe } from '@chakra-ui/react/styled-system'

export const inputRecipe = defineRecipe({
  className: 'snaps-ui-input',
  base: {
    width: '100%',
    minHeight: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    textAlign: 'start',
    _disabled: {
      layerStyle: 'disabled',
    },
    minW: 'var(--input-height)',
    height: 'var(--input-height)',
    '--error-color': 'colors.border.error',
    '--focus-ring': 'colors.snaps.600',
    _invalid: {
      focusRingColor: 'var(--error-color)',
      borderColor: 'var(--error-color)',
    },
  },
  variants: {
    size: {
      xs: {
        borderRadius: 'control.sm',
        textStyle: 'xs',
        px: '2',
        '--input-height': 'sizes.6',
      },
      sm: {
        borderRadius: 'control.md',
        textStyle: 'sm',
        px: '2.5',
        '--input-height': 'sizes.7',
      },
      md: {
        borderRadius: 'control.md',
        textStyle: 'sm',
        px: '3',
        '--input-height': 'sizes.10',
      },
      lg: {
        borderRadius: 'control.lg',
        textStyle: 'md',
        px: '4.5',
        '--input-height': 'sizes.12',
      },
      xl: {
        borderRadius: 'control.lg',
        textStyle: 'md',
        px: '6',
        '--input-height': 'sizes.14',
      },
    },
    variant: {
      outline: {
        bg: 'transparent',
        borderWidth: '1px',
        borderColor: 'border.inverted',
        focusVisibleRing: 'inside',
        focusRingWidth: 0,
        _hover: {
          borderColor: 'bg',
          _focusVisible: {
            borderColor: 'var(--focus-ring)',
          },
        },
        _focusVisible: {
          borderColor: 'bg',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
        },
      },
      subtle: {
        borderWidth: '1px',
        borderColor: 'transparent',
        bg: 'fg.inverted',
        focusVisibleRing: 'inside',
        _focusVisible: {
          borderColor: 'bg',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
        },
      },
      flushed: {
        bg: 'transparent',
        borderBottomWidth: '1px',
        borderBottomColor: 'border.inverted',
        borderRadius: '0',
        px: '0',
        _focusVisible: {
          borderColor: 'bg',
          boxShadow: '0px 1px 0px 0px var(--focus-color)',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
})
