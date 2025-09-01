export function scaleToken(value: string | number) {
  return `calc(${value} * var(--scale-factor))`
}

export function radiusToken(value: string | number) {
  return `calc(${value} * var(--scale-factor) * var(--radius-factor))`
}
