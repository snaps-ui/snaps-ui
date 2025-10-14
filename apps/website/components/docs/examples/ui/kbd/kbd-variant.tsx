import { Flex, Kbd } from '@snaps-ui/react'

export default function PaperVariant() {
  return (
    <Flex gap={2}>
      <Kbd variant={'subtle'}>F12</Kbd>
      <Kbd variant={'outline'}>F5</Kbd>
      <Kbd variant={'face'}>F11</Kbd>
    </Flex>
  )
}
