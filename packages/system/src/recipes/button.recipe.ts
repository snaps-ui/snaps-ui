import { defineRecipe } from '@chakra-ui/react/styled-system'

export const buttonRecipe = defineRecipe({
  className: 'snaps-ui-button',
  base: {
    colorPalette: 'gray',
    appearance: 'none',
    borderRadius: 'md',
    fontWeight: 'medium',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'center',
    position: 'relative',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    transition: 'all 0.2s',
    cursor: 'pointer',
    lineHeight: '1.2',
    focusVisibleRing: 'outside',

    _focusVisible: {
      ring: '2px',
      ringColor: 'snaps.500',
    },
    _disabled: {
      layerStyle: 'disabled',
    },
    _icon: {
      fontSize: '1em',
      flexShrink: 0,
      bg: 'transparent',
    },

    _before: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '200%',
      height: '200%',
      borderRadius: 'full',
      background: 'blackAlpha.500',
      opacity: 0,
      transform: 'scale(0)',
      transformOrigin: 'bottom left',
      pointerEvents: 'none',
    },

    _active: {
      _before: {
        animation: 'ripple 0.9s ease-out',
      },
    },
  },

  variants: {
    variant: {
      solid: {
        bg: 'bg',
        color: 'white',
        _hover: { bg: 'snaps.700' },
        _popupExpanded: {
          bg: 'colorPalette.solid/90',
        },
      },
      outline: {
        border: '1px solid',
        borderColor: 'snaps.600',
        color: 'snaps.600',
        _hover: { bg: 'snaps.600', color: 'snaps.50' },
      },
      ghost: {
        color: 'snaps.600',
        _hover: { bg: 'snaps.100' },
      },
      plain: {
        color: 'colorPalette.fg',
      },
      subtle: {
        bg: 'snaps.50',
        color: 'snaps.700',
        _hover: { bg: 'snaps.100' },
      },
    },
    size: {
      xs: { fontSize: 'xs', px: '4', py: '3', borderRadius: 'control.sm' },
      sm: { fontSize: 'sm', px: '5', py: '3.5', borderRadius: 'control.sm' },
      md: { fontSize: 'md', px: '6', py: '4', borderRadius: 'control.md' },
      lg: { fontSize: 'lg', px: '7', py: '4.5', borderRadius: 'control.lg' },
      xl: { fontSize: 'xl', px: '8', py: '5', borderRadius: 'control.lg' },
    },
  },

  compoundVariants: [
    {
      variant: 'plain',
      css: {
        px: 0,
      },
    },
  ],

  defaultVariants: {
    size: 'sm',
    variant: 'solid',
    colorPalette: 'gray',
  },
})
