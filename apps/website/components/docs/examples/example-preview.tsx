import dynamic from 'next/dynamic'
import type { ExampleProps } from './example-tabs'

export const ExamplePreview = ({ name, scope = '' }: ExampleProps) => {
  const Component = dynamic(async () => {
    const mod = await import(`../examples/ui/${scope}/${name}.tsx`)

    // Convert file-name (e.g. "avatar-card") → "AvatarCard"
    const componentName = name
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('')

    // Use the component if exported by name, else fallback to default export
    return mod[componentName] ?? mod.default
  })

  return <Component />
}
