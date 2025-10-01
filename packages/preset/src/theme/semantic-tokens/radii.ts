import { defineSemanticTokens } from '@pandacss/dev'

export const radii = defineSemanticTokens.radii({
  s1: { value: '{radii.xs}' },
  s2: { value: '{radii.sm}' },
  s3: { value: '{radii.md}' },
})
