import {
  defineRecipe,
  type RecipeVariantProps,
} from '@chakra-ui/react/styled-system'

export const toastRecipe = defineRecipe({
  className: 'snaps-ui-toast',
  base: {
    display: 'flex',
    borderRadius: 'md',
    overflow: 'hidden',
    width: '100%',
    shadow: 'sm',
    zIndex: '9999',
    bg: { base: 'white', _dark: 'black' },
  },
  variants: {
    status: {
      success: {
        '--status-color': '#039855',
      },
      error: {
        '--status-color': '#EF4444',
      },
      warning: {
        '--status-color': '#FACC15',
      },
    },
  },
  defaultVariants: {
    status: 'success',
  },
})

export type ToastVariantProps = RecipeVariantProps<typeof toastRecipe>
