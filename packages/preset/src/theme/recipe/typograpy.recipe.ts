import { defineRecipe } from '@pandacss/dev'

export const typographyRecipe = defineRecipe({
  className: 'snaps-typography',
  jsx: ['Typography'],
  description: 'Snaps UI Typography variants',
  base: {
    color: 'fg.default',
    fontWeight: 'normal',
    margin: '0',
  },
  variants: {
    variant: {
      h1: { textStyle: '6xl', fontWeight: 'bold', letterSpacing: '-0.02em' },
      h2: {
        textStyle: '5xl',
        fontWeight: 'semibold',
        letterSpacing: '-0.02em',
      },
      h3: { textStyle: '4xl', fontWeight: 'semibold' },
      h4: { textStyle: '3xl', fontWeight: 'medium' },
      h5: { textStyle: '2xl', fontWeight: 'medium' },
      h6: { textStyle: 'xl', fontWeight: 'medium' },

      subtitle1: { textStyle: 'lg', fontWeight: 'medium', color: 'fg.muted' },
      subtitle2: { textStyle: 'md', fontWeight: 'medium', color: 'fg.muted' },

      body1: { textStyle: 'md', lineHeight: '1.5rem' },
      body2: { textStyle: 'sm', lineHeight: '1.25rem' },

      caption: { textStyle: 'xs', lineHeight: '1.125rem' },
      overline: {
        textStyle: 'xs',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      },
    },

    gutterBottom: {
      true: { marginBottom: '0.35em' },
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
})
