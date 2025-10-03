'use client'

import Link from 'next/link'
import { /*useEffect*/ useState } from 'react'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { IconButton } from '@snaps-ui/react/icon-button'

// import { warningToast } from '@snaps-ui/react/toaster'
import { Typography } from '@snaps-ui/react/typography'
import { FaGithub, FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

import { ColorModeButton } from '~/components/color-mode-button'
import { AppLogo } from '~/components/logo'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect(() => {
  //   if (!sessionStorage.getItem('snaps-ui-toast-shown')) {
  //     warningToast({
  //       title: '🚧 Snaps UI',
  //       description: 'Snaps UI is still in development mode.',
  //     })

  //     sessionStorage.setItem('snaps-ui-toast-shown', 'true')
  //   }
  // }, [])

  const navLinks = [
    { href: '/docs', label: 'Docs' },
    { href: '/components', label: 'Components' },
    { href: '/blogs', label: 'Blogs' },
  ]

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      bg={'bg.emphasized'}
      backdropFilter="blur(10px)"
      px="4"
      py="4"
      zIndex="1000"
    >
      <Flex
        w="90%"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <AppLogo />

        {/* Desktop Nav */}
        <Flex
          gap="2"
          alignItems="center"
          display={{ base: 'none', md: 'flex' }}
        >
          {navLinks.map(({ href, label }, index: number) => (
            <Typography
              variant="body2"
              key={index}
              transition="color 0.2s ease"
              _hover={{
                color: 'fg.subtle',
                _dark: { color: 'fg.muted' },
              }}
            >
              <Link href={href}>{label}</Link>
            </Typography>
          ))}

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="ghost"
            size="xs"
          >
            <Link
              href="https://github.com/snaps-ui/snaps-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </Link>
          </IconButton>

          <ColorModeButton />
        </Flex>

        {/* Mobile Menu Button */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            aria-label="Toggle Menu"
            variant="ghost"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </IconButton>
        </Box>
      </Flex>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <Box
          mt="3"
          px="4"
          py="3"
          borderRadius="md"
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          gap="3"
        >
          {navLinks.map(({ href, label }, index: number) => (
            <Typography
              variant="body2"
              key={index}
              _hover={{
                color: 'blackAlpha.800',
                _dark: { color: 'whiteAlpha.800' },
              }}
              onClick={() => setMenuOpen(false)}
            >
              <Link href={href}>{label}</Link>
            </Typography>
          ))}

          <Flex gap="4" alignItems="center">
            <IconButton
              asChild
              aria-label="GitHub Repository"
              variant="plain"
              size="xs"
              colorPalette="gray"
            >
              <Link
                href="https://github.com/snaps-ui/snaps-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} />
              </Link>
            </IconButton>

            <ColorModeButton />
          </Flex>
        </Box>
      )}
    </Box>
  )
}
