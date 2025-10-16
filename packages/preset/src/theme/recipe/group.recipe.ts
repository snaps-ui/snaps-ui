import { defineRecipe } from '@pandacss/dev'

export const groupRecipe = defineRecipe({
  className: 'snaps-group',
  description: 'A flex group component for layout and avatar stacking',
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
    },
    attached: {
      true: {
        gap: '0!',
      },
    },
    overlap: {
      true: {
        '& > *:not(:first-child)': {
          marginLeft: '-0.75rem',
        },
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    overlap: false,
  },
})
