'use client'

import { IconButton } from '@snaps-ui/react/icon-button'
import { Clipboard } from '@snaps-ui/react/clipboard'

export function CopyButton({ code }: { code?: string }) {
  return (
    <Clipboard.Root value={code}>
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <IconButton variant="ghost" size="sm">
            <Clipboard.Indicator />
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
