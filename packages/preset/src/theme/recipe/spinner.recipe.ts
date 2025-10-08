import { defineRecipe } from '@pandacss/dev'

export const spinnerRecipe = defineRecipe({
  className: 'snaps-spinner',
  base: {
    display: 'inline-block',
    borderColor: 'colorPalette.default',
    borderStyle: 'solid',
    borderRadius: 'full',
    borderWidth: '2px',
    width: 'var(--size)',
    height: 'var(--size)',
    animation: 'spin',
    animationDuration: 'fastest',
  },
  variants: {
    size: {
      xs: { '--size': 'sizes.3' },
      sm: { '--size': 'sizes.4' },
      md: { '--size': 'sizes.6' },
      lg: { '--size': 'sizes.8' },
      xl: { '--size': 'sizes.12' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
