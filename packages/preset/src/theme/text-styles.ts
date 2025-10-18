import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  xs: { value: { fontSize: '0.75rem', lineHeight: '1.125rem' } },
  sm: { value: { fontSize: '0.875rem', lineHeight: '1.25rem' } },
  md: { value: { fontSize: '1rem', lineHeight: '1.5rem' } },
  lg: { value: { fontSize: '1.125rem', lineHeight: '1.75rem' } },
  xl: { value: { fontSize: '1.25rem', lineHeight: '1.875rem' } },
  '2xl': { value: { fontSize: '1.5rem', lineHeight: '2rem' } },
  '3xl': { value: { fontSize: '1.875rem', lineHeight: '2.25rem' } },
  '4xl': { value: { fontSize: '2.25rem', lineHeight: '2.5rem' } },
  '5xl': { value: { fontSize: '3rem', lineHeight: '3.25rem' } },
  '6xl': { value: { fontSize: '3.75rem', lineHeight: '3.75rem' } },
  '7xl': { value: { fontSize: '4.5rem', lineHeight: '4.75rem' } },
  '8xl': { value: { fontSize: '6rem', lineHeight: '6.25rem' } },
})
