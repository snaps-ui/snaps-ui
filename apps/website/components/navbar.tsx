'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { IconButton } from '@snaps-ui/react/icon-button'
import { warningToast } from '@snaps-ui/react/toaster'
import { FaGithub, FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

import { ColorModeButton } from '~/components/color-mode-button'
import { AppLogo } from '~/components/logo'
import { Typography } from '~/components/typography'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem('snaps-ui-toast-shown')) {
      warningToast({
        title: '🚧 Snaps UI',
        description: 'Snaps UI is still in development mode.',
      })

      sessionStorage.setItem('snaps-ui-toast-shown', 'true')
    }
  }, [])

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
      borderBottom="0.1px solid"
      borderColor={{ base: 'blackAlpha.400', _dark: 'whiteAlpha.400' }}
      bg={{ base: 'whiteAlpha.50', _dark: 'blackAlpha.50' }}
      backdropFilter="blur(10px)"
      px="4"
      py="2"
      zIndex="1000"
    >
      <Flex w="90%" mx="auto" align="center" justify="space-between">
        {/* Logo */}
        <AppLogo />

        {/* Desktop Nav */}
        <Flex gap="6" align="center" display={{ base: 'none', md: 'flex' }}>
          {navLinks.map(({ href, label }, index: number) => (
            <Typography
              variant="body3"
              key={index}
              transition="color 0.2s ease"
              _hover={{
                color: 'blackAlpha.700',
                _dark: { color: 'whiteAlpha.700' },
              }}
            >
              <Link href={href}>{label}</Link>
            </Typography>
          ))}

          <IconButton
            asChild
            aria-label="GitHub Repository"
            variant="plain"
            size="sm"
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
          bg={{ base: 'whiteAlpha.900', _dark: 'blackAlpha.800' }}
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

          <Flex gap="4" align="center">
            <IconButton
              asChild
              aria-label="GitHub Repository"
              variant="plain"
              size="sm"
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
