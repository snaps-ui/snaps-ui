import { ClientOnly } from '@snaps-ui/react/client-only'

export default function ClientOnlyBasics() {
  return (
    <ClientOnly>
      <div>This content is only rendered on the client side.</div>
    </ClientOnly>
  )
}
