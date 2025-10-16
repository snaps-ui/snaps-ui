'use client'

import { CommandInput } from '@snaps-ui/react/command-input'

export default function CommandInputShortcut() {
  return (
    <CommandInput
      onOpen={() => console.log('Shortcut triggered')}
      shortcut="Ctrl + Shift + P"
    />
  )
}
