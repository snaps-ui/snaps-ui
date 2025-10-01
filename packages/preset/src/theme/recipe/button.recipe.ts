import { defineRecipe } from '@pandacss/dev'

export const buttonRecipe = defineRecipe({
  className: 'button',
  jsx: ['Button', 'IconButton'],
  base: {
    colorPalette: 'gray',
    appearance: 'none',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 's2',
    display: 'inline-flex',
    fontWeight: 'medium',
    isolation: 'isolate',
    minWidth: '0',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: 'all 0.2s',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    _hidden: {
      display: 'none',
    },
    _icon: {
      flexShrink: '0',
    },
  },
  variants: {
    variant: {
      solid: {
        background: 'colorPalette.default',
        color: 'colorPalette.fg',
        _hover: {
          background: 'colorPalette.emphasized',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
        _disabled: {
          color: 'fg.disabled',
          background: 'bg.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'fg.disabled',
            background: 'bg.disabled',
          },
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'colorPalette.alpha7',
        color: 'colorPalette.text',
        _hover: {
          background: 'colorPalette.alpha2',
        },
        _disabled: {
          borderColor: 'border.disabled',
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            borderColor: 'border.disabled',
            color: 'fg.disabled',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
        _selected: {
          background: 'accent.default',
          borderColor: 'accent.default',
          color: 'accent.fg',
          _hover: {
            background: 'accent.emphasized',
            borderColor: 'accent.emphasized',
          },
        },
      },
      plain: {
        background: 'transparent',
        color: 'colorPalette.text',
      },
      subtle: {
        background: 'colorPalette.alpha3',
        color: 'colorPalette.text',
        _hover: {
          background: 'colorPalette.alpha4',
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
        _disabled: {
          background: 'bg.disabled',
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'bg.disabled',
            color: 'fg.disabled',
          },
        },
      },
      ghost: {
        color: 'colorPalette.text',
        _hover: {
          background: 'colorPalette.alpha3',
        },
        _selected: {
          background: 'colorPalette.alpha3',
        },
        _disabled: {
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            color: 'fg.disabled',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'colorPalette.default',
          outlineOffset: '2px',
        },
      },
    },

    ripple: {
      true: {
        _before: {
          content: '""',
          position: 'absolute',
          inset: 0,
          width: 'full',
          height: 'auto',
          borderRadius: 'full',
          background: 'currentColor',
          opacity: 0,
          transform: 'scale(0)',
          transformOrigin: 'bottom left',
          pointerEvents: 'none',
        },
        _active: {
          _before: {
            animation: 'ripple 0.6s ease-out',
          },
        },
      },
      false: {}, // no ripple styles
    },

    size: {
      '2xs': {
        h: '6',
        minW: '6',
        textStyle: 'xs',
        px: '2',
        gap: '1',
        _icon: {
          width: '3.5',
          height: '3.5',
        },
      },
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '2.5',
        gap: '1',
        _icon: {
          width: '4',
          height: '4',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        px: '3.5',
        textStyle: 'sm',
        gap: '2',
        _icon: {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '5',
        gap: '3',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
        _icon: {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
        _icon: {
          width: '6',
          height: '6',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    ripple: false,
  },
})
