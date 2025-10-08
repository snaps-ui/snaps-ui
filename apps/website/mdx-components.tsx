'use client'

import * as React from 'react'
import { Typography, Box } from '@snaps-ui/react'
import Link from 'next/link'

export const components = {
  h1: (props: any) => (
    <Typography
      as="h1"
      fontSize="3xl"
      fontWeight="bold"
      mt="8"
      mb="4"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      as="h2"
      fontSize="2xl"
      fontWeight="semibold"
      mt="6"
      mb="3"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      as="h3"
      fontSize="xl"
      fontWeight="medium"
      mt="4"
      mb="2"
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography as="p" my="3" color="gray.500" lineHeight="taller" {...props} />
  ),
  a: (props: any) => (
    <Link
      color="accent"
      textDecoration="underline"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      {...props}
    />
  ),
  ul: (props: any) => <Box as="ul" pl="6" mb="3" {...props} />,
  ol: (props: any) => <Box as="ol" pl="6" mb="3" {...props} />,
  li: (props: any) => <Box as="li" my="1" {...props} />,
  code: (props: any) => (
    <Box
      as={'code'}
      px="2"
      py="1"
      rounded="md"
      bg="gray.800"
      color="accent"
      fontFamily="mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <Box
      as="pre"
      p="4"
      my="4"
      overflowX="auto"
      rounded="xl"
      bg="gray.900"
      border="1px solid"
      borderColor="gray.800"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <Box
      as="blockquote"
      pl="4"
      my="4"
      borderLeft="4px solid var(--colors-accent)"
      color="gray.400"
      fontStyle="italic"
      {...props}
    />
  ),
}
