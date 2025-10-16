'use client'

import { CommandInput } from '@snaps-ui/react/command-input'

export default function CommandInputDemo() {
  return (
    <CommandInput
      placeholder="Search...."
      onOpen={() => alert('Open Command')}
    />
  )
}
