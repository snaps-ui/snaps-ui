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
      h1: {
        textStyle: '5xl',
        fontWeight: 'bold',
        lineHeight: '3.75rem',
        letterSpacing: '-0.02em',
      },
      h2: {
        textStyle: '4xl',
        fontWeight: 'semibold',
        lineHeight: '2.75rem',
        letterSpacing: '-0.02em',
      },
      h3: { textStyle: '3xl', fontWeight: 'semibold', lineHeight: '2.375rem' },
      h4: { textStyle: '2xl', fontWeight: 'semibold', lineHeight: '2rem' },
      h5: { textStyle: 'xl', fontWeight: 'medium', lineHeight: '1.875rem' },
      h6: { textStyle: 'lg', fontWeight: 'medium', lineHeight: '1.75rem' },

      subtitle1: {
        textStyle: 'md',
        fontWeight: 'medium',
        lineHeight: '1.5rem',
      },
      subtitle2: {
        textStyle: 'sm',
        fontWeight: 'medium',
        lineHeight: '1.25rem',
      },

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
