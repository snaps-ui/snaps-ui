import { defineTokens } from '@chakra-ui/react'

export const animations = defineTokens.animations({
  ping: { value: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' },
  spin: { value: 'spin 1s linear infinite' },
  pulse: { value: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
  bounce: { value: 'bounce 1s infinite' },
})
