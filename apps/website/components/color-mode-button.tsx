'use client'

import { useTheme } from 'next-themes'

import { ClientOnly } from '@snaps-ui/react/client-only'
import { IconButton } from '@snaps-ui/react/icon-button'
import { IoSunnyOutline } from 'react-icons/io5'
import { FaMoon } from 'react-icons/fa6'

export const ColorModeButton = () => {
  const { theme, setTheme } = useTheme()

  const handleChageTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ClientOnly fallback={<p>...</p>}>
      <IconButton
        onClick={handleChageTheme}
        size="sm"
        color="inherit"
        variant="plain"
        cursor={'pointer'}
      >
        {theme === 'light' ? (
          <IoSunnyOutline size={'17px'} />
        ) : (
          <FaMoon size={'17px'} />
        )}
      </IconButton>
    </ClientOnly>
  )
}
