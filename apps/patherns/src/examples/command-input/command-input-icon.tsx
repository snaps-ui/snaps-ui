'use client'

import { CommandInput } from '@snaps-ui/react/command-input'
import { LuUserRoundSearch } from 'react-icons/lu'

export default function CommandInputDemo() {
  return (
    <CommandInput
      placeholder="Search docs...."
      leftElement={<LuUserRoundSearch />}
    />
  )
}
