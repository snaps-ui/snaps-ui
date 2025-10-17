import { Clipboard } from '@snaps-ui/react'

export default function ClipboardWithTimer() {
  return (
    <Clipboard.Root value="https://snaps-ui.vercel.app/" timeout={2000}>
      <Clipboard.Trigger>
        <Clipboard.Indicator />
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
