import {
  defineRecipe,
  type RecipeVariantProps,
} from '@chakra-ui/react/styled-system'

export const paperRecipe = defineRecipe({
  className: 'snaps-ui-paper',
  base: {
    borderRadius: 'md',
    bg: { base: 'white', _dark: 'gray.900' },
    p: 6,
  },

  variants: {
    variant: {
      filled: {
        bg: { base: 'white', _dark: 'gray.800' },
        borderWidth: '1px',
        borderColor: { base: 'gray.200', _dark: 'gray.300' },
        color: { base: 'black', _dark: 'black' },
      },
      outline: {
        bg: 'transparent',
        borderWidth: '1px',
        borderColor: { base: 'gray.200', _dark: 'gray.300' },
      },
    },
    elevation: {
      0: { boxShadow: 'none' },
      1: { boxShadow: 'sm' },
      2: { boxShadow: 'md' },
      3: { boxShadow: 'lg' },
      4: { boxShadow: 'xl' },
    },
  },

  defaultVariants: {
    elevation: 1,
    variant: 'filled',
  },
})

export type PaperVariantProps = RecipeVariantProps<typeof paperRecipe>
