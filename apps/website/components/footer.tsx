'use client'

import Link from 'next/link'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Stack } from '@snaps-ui/react/stack'
import { IconButton } from '@snaps-ui/react/icon-button'
import { Text } from '@snaps-ui/react/text'
import { Heading } from '@snaps-ui/react/heading'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { IoLogoVercel } from 'react-icons/io5'

import { AppLogo } from '~/components/logo'

const resources = [
  { href: '/docs', label: 'Documentions' },
  { href: '/docs', label: 'Components' },
  { href: '/blogs', label: 'Blog' },
]

const company = [
  { href: 'mailto:chimobi.justice@gmail.com', label: 'Contact Us' },
]

const socials = [
  {
    href: 'https://github.com/snaps-ui/snaps-ui',
    label: 'GitHub Repository',
    icon: <FaGithub size={18} />,
  },
  { href: '#', label: 'Twitter', icon: <FaXTwitter size={18} /> },
  { href: '#', label: 'Discord', icon: <FaDiscord size={18} /> },
]

export const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor={{ base: 'blackAlpha.200', _dark: 'whiteAlpha.200' }}
      bg={{ base: 'whiteAlpha.50', _dark: 'blackAlpha.50' }}
      backdropFilter="blur(10px)"
      px={{ base: '6', md: '12' }}
      py="12"
      mt="16"
      color={'accent.contrast'}
    >
      <Grid
        w="90%"
        mx="auto"
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={{ base: '10', md: '16' }}
      >
        {/* Left Section */}
        <GridItem>
          <Stack gap={5} maxW="sm">
            <AppLogo />

            <Text fontSize="13px">
              Build beautiful, accessible UIs with ease and Craft stunning
              interfaces, faster.
            </Text>

            <Text fontSize="13px">
              Maintained by{' '}
              <Text
                as="span"
                color="bg"
                transition="color 0.2s ease"
                fontWeight="bolder"
              >
                <Link
                  href="https://github.com/chimobi-justice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Justice Chimobi
                </Link>
              </Text>{' '}
              and contributors
            </Text>

            <Flex align="center" gap={2} fontSize="13px">
              <Text>Deployed on</Text>
              <IoLogoVercel />
              <Text>Vercel</Text>
            </Flex>

            <Flex gap={3} mt={2}>
              {socials.map(({ href, label, icon }) => (
                <IconButton
                  key={label}
                  asChild
                  aria-label={label}
                  variant="plain"
                  size="sm"
                  rounded="full"
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    {icon}
                  </Link>
                </IconButton>
              ))}
            </Flex>
          </Stack>
        </GridItem>

        {/* Resources */}
        <GridItem textAlign={{ base: 'left', md: 'center' }}>
          <Heading fontSize="15px" mb={4} color={'gray.700'}>
            Resources
          </Heading>
          <Stack gap={3}>
            {resources.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text
                  fontSize="13px"
                  color="gray.300"
                  transition="color 0.2s ease"
                  _hover={{
                    color: 'blackAlpha.800',
                    _dark: { color: 'whiteAlpha.800' },
                  }}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </Stack>
        </GridItem>

        {/* Company */}
        <GridItem textAlign={{ base: 'left', md: 'center' }}>
          <Heading fontSize="15px" mb={4} color={'gray.700'}>
            Company
          </Heading>
          <Stack gap={3}>
            {company.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text
                  fontSize="13px"
                  color="gray.300"
                  transition="color 0.2s ease"
                  _hover={{
                    color: 'blackAlpha.800',
                    _dark: { color: 'whiteAlpha.800' },
                  }}
                >
                  {label}
                </Text>
              </Link>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  )
}
