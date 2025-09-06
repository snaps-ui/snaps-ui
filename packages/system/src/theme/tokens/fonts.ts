import { defineTokens } from '@chakra-ui/react'

const fallbackFonts = `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`

export const fonts = defineTokens.fonts({
  heading: {
    value: `Roboto, ${fallbackFonts}`,
  },
  body: {
    value: `Roboto, ${fallbackFonts}`,
  },
  mono: {
    value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
  },
})
