import { Box, type BoxProps } from '@snaps-ui/react'

export const P = (props: BoxProps) => {
  return (
    <Box
      as="p"
      {...props}
      css={{
        color: 'fg.muted',
        lineHeight: '1.75',
        marginTop: '1em',
        marginBottom: '1em',
        _first: { marginTop: '0' },
        _last: { marginBottom: '0' },
        '& + .example-tabs': { marginTop: '2em' },
      }}
    />
  )
}

export const Strong = (props: BoxProps) => {
  return (
    <Box
      as="strong"
      {...props}
      css={{
        fontWeight: 'bold',
        color: 'fg.default',
      }}
    />
  )
}
