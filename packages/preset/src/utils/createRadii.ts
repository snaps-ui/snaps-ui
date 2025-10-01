import { type Radius } from '../types'

const radiiMap: Record<string, Record<string, { value: string }>> = {
  xs: {
    s1: { value: '{radii.2xs}' },
    s2: { value: '{radii.xs}' },
    s3: { value: '{radii.sm}' },
  },
  sm: {
    s1: { value: '{radii.xs}' },
    s2: { value: '{radii.sm}' },
    s3: { value: '{radii.md}' },
  },
  md: {
    s1: { value: '{radii.sm}' },
    s2: { value: '{radii.md}' },
    s3: { value: '{radii.lg}' },
  },
  lg: {
    s1: { value: '{radii.md}' },
    s2: { value: '{radii.lg}' },
    s3: { value: '{radii.xl}' },
  },
  xl: {
    s1: { value: '{radii.lg}' },
    s2: { value: '{radii.xl}' },
    s3: { value: '{radii.2xl}' },
  },
  '2xl': {
    s1: { value: '{radii.xl}' },
    s2: { value: '{radii.2xl}' },
    s3: { value: '{radii.3xl}' },
  },
  default: {
    s1: { value: '{radii.none}' },
    s2: { value: '{radii.none}' },
    s3: { value: '{radii.none}' },
  },
}

export const createRadii = (radii: Radius) =>
  radiiMap[radii] ?? radiiMap.default
