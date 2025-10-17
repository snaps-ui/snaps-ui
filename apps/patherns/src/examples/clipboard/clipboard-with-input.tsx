import { Clipboard, IconButton, Input } from '@snaps-ui/react'
import { FaCheckDouble } from 'react-icons/fa6'
import { IoCopyOutline } from 'react-icons/io5'

export default function ClipboardWithInput() {
  return (
    <Clipboard.Root value="https://snaps-ui.vercel.app/">
      <Clipboard.Label>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<FaCheckDouble />}>
              <IoCopyOutline />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
