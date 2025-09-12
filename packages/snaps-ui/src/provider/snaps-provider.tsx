import * as React from 'react'
import {
  ChakraProvider as BaseChakraProvider,
  type ChakraProviderProps,
} from '@chakra-ui/react'

export interface SnapsProviderProps extends ChakraProviderProps {
  children: React.ReactNode
}

export const SnapsProvider = (props: SnapsProviderProps) => {
  const { children, ...rests } = props

  return <BaseChakraProvider {...rests}>{children}</BaseChakraProvider>
}
