'use client'

import { forwardRef, type ReactNode } from 'react'
import { chakra, type HTMLChakraProps } from '@snaps-ui/react'
import { Heading as SnapsHeading } from '@snaps-ui/react/heading'
import { Text as SnapsText } from '@snaps-ui/react/text'

type Variant =
  | 'heading'
  | 'subheading'
  | 'title'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'body3'

const variants: Record<Variant, any> = {
  heading: {
    as: 'h1',
    fontSize: { base: '32px', md: '48px' },
    fontWeight: 'extrabold',
    lineHeight: 'short',
    color: 'accent.contrast',
  },
  subheading: {
    as: 'h2',
    fontSize: { base: '24px', md: '32px' },
    fontWeight: 'bold',
    lineHeight: 'shorter',
    color: 'accent.contrast',
  },
  title: {
    as: 'h3',
    fontSize: { base: '18px', md: '24px' },
    fontWeight: 'semibold',
    color: 'accent.contrast',
  },
  subtitle: {
    as: 'h4',
    fontSize: { base: '16px', md: '20px' },
    fontWeight: 'medium',
    color: 'gray.700',
  },
  body1: {
    as: 'p',
    fontSize: { base: '14px', md: '16px' },
    fontWeight: 'normal',
    color: 'accent.contrast',
  },
  body2: {
    as: 'p',
    fontSize: { base: '12px', md: '14px' },
    fontWeight: 'normal',
    color: 'accent.contrast',
  },
  body3: {
    as: 'p',
    fontSize: { base: '12px', md: '13px' },
    fontWeight: 'normal',
    color: 'accent.contrast',
  },
}

interface TypographyProps extends HTMLChakraProps<'div'> {
  variant: Variant
  children: ReactNode
}

/**
 * Typography component
 */
export const Typography = forwardRef<HTMLDivElement, TypographyProps>(
  function TypographyProps(props, ref) {
    const { variant, children, ...rest } = props
    const style = variants[variant]

    // Decide which base component to use
    const Base =
      variant === 'heading' ||
      variant === 'subheading' ||
      variant === 'title' ||
      variant === 'subtitle'
        ? SnapsHeading
        : SnapsText

    return (
      <chakra.div as={Base} ref={ref} {...style} {...rest}>
        {children}
      </chakra.div>
    )
  }
)

Typography.displayName = 'Typography'
