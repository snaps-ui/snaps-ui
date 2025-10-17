import { defineSlotRecipe } from '@pandacss/dev'
import { clipboardAnatomy } from '@ark-ui/react/anatomy'

export const clipboardSlotRecipe = defineSlotRecipe({
  className: 'snaps-clipboard',
  slots: clipboardAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.3',
    },
    control: {
      display: 'flex',
      gap: '2',
    },
  },

  variants: {},

  defaultVariants: {},
})
