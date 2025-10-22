'use client'

import { useState } from 'react'
import { Switch } from '@snaps-ui/react/switch'

export default function SwitchWithControl() {
  const [checked, setChecked] = useState(false)

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Snaps UI Switch</Switch.Label>
    </Switch.Root>
  )
}
