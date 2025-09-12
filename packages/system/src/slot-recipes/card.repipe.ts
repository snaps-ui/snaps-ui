import { defineSlotRecipe } from '@chakra-ui/react/styled-system'
import { cardAnatomy } from '@chakra-ui/react/anatomy'

export const cardRecipeSlot = defineSlotRecipe({
  className: 'snaps-ui-card',
  slots: cardAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: '0',
      wordWrap: 'break-word',
      borderRadius: 'lg',
      color: 'fg',
      textAlign: 'start',
    },
    header: {
      paddingBottom: 'calc(var(--card-padding) / 2)',
      padding: 'var(--card-padding)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
    },
    body: {
      padding: 'var(--card-padding)',
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      '&:is(.chakra-card__header + &)': {
        paddingTop: 'calc(var(--card-padding) / 3)',
      },
      '&:has(+ .chakra-card__footer)': {
        paddingBottom: 'calc(var(--card-padding) / 3)',
      },
    },
    title: {
      fontWeight: 'medium',
    },
    description: {
      color: 'fg.subtle',
      fontSize: 'sm',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      padding: 'var(--card-padding)',
      paddingTop: 'calc(var(--card-padding) / 3)',
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          '--card-padding': 'spacing.2.5',
        },
        title: {
          fontSize: 'sm',
        },
      },
      md: {
        root: {
          '--card-padding': 'spacing.4',
        },
        title: {
          fontSize: 'md',
        },
      },
      lg: {
        root: {
          '--card-padding': 'spacing.6',
        },
        title: {
          fontSize: 'lg',
        },
      },
    },

    variant: {
      elevated: {
        root: {
          bg: 'bg.inverted',
          boxShadow: 'md',
          borderWidth: '0.5px',
          borderColor: 'border.emphasized',
          _pressable: {
            transitionProperty: 'common',
            transitionDuration: 'fast',
            _hover: {
              borderColor: 'border.emphasized',
            },
          },
        },
        title: {
          color: 'fg.muted',
        },
      },
      outline: {
        root: {
          bg: 'bg.emphasized',
          borderWidth: '1px',
          borderColor: 'border.emphasized',
          _pressable: {
            transitionProperty: 'common',
            transitionDuration: 'fast',
            _hover: {
              borderColor: 'border.emphasized',
            },
          },
        },
      },
      subtle: {
        root: {
          bg: 'colorPalette.muted',
          color: 'fg.muted',
          _pressable: {
            _hover: {
              bg: 'colorPalette.solid/80',
            },
          },
        },
        description: {
          color: 'fg.muted',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
})
