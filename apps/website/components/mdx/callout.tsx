import { Box } from '@snaps-ui/react/box'
import { Typography } from '@snaps-ui/react/typography'

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip' | 'danger'
  children: React.ReactNode
}

export const Callout = ({ type = 'info', children }: CalloutProps) => {
  const bgColorMap = {
    info: 'blue.50',
    tip: 'green.50',
    warning: 'yellow.50',
    danger: 'red.50',
  }

  const borderColorMap = {
    info: 'blue.500',
    tip: 'green.500',
    warning: 'yellow.500',
    danger: 'red.500',
  }

  return (
    <Box
      borderLeftWidth="4px"
      borderColor={borderColorMap[type]}
      bg={bgColorMap[type]}
      px={4}
      py={3}
      rounded="md"
      my={4}
    >
      <Typography fontWeight="bold" mb={1}>
        {type.toUpperCase()}
      </Typography>
      <Typography>{children}</Typography>
    </Box>
  )
}
