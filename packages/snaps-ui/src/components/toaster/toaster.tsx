'use client'

import * as React from 'react'
import { toast as sonnerToast } from 'sonner'
import { Box } from '@chakra-ui/react/box'
import { Flex } from '@chakra-ui/react/flex'
import { IconButton } from '@chakra-ui/react/button'
import { Stack } from '@chakra-ui/react/stack'
import { Text } from '@chakra-ui/react/Text'
import {
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa'

import { useColorModeValue } from '../../hooks/useColorModeValue'

export const toast: typeof sonnerToast = sonnerToast

type StatusType = 'success' | 'warning' | 'error'

interface ToasterProps {
  id: number | string
  title: string
  description?: string
  status?: StatusType
}

const statusConfig: Record<
  StatusType,
  { color: string; icon: React.ElementType }
> = {
  success: { color: '#039855', icon: FaCheck },
  warning: { color: '#FACC15', icon: FaExclamationTriangle },
  error: { color: '#EF4444', icon: FaTimesCircle },
}

export const createToast =
  (status: StatusType) => (props: Omit<ToasterProps, 'id' | 'status'>) => {
    return sonnerToast.custom((id) => (
      <Toast id={id} status={status} {...props} />
    ))
  }

export const successToast = createToast('success')

export const warningToast = createToast('warning')

export const errorToast = createToast('error')

function Toast(props: ToasterProps) {
  const { id, title, description, status = 'success' } = props
  const { color, icon } = statusConfig[status]
  const RenderIcon = icon

  const bg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.900', 'gray.100')
  const descColor = useColorModeValue('gray.600', 'gray.400')
  const closeColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <Flex
      bg={bg}
      p={'0px'}
      borderRadius={'5px'}
      overflow={'hidden'}
      width={'100%'}
      shadow={'sm'}
    >
      <Flex justifyContent={'center'} width={'100%'}>
        {/* Status block */}
        <Box
          bg={color}
          py={'10px'}
          px={'14px'}
          textAlign={'center'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
        >
          <RenderIcon color="#ffffff" />
        </Box>

        {/* Content */}
        <Stack flex="1" py="10px" px="20px" gap="1" justify="center">
          <Text fontSize="14px" fontWeight="medium" color={titleColor}>
            {title}
          </Text>
          {description && (
            <Text
              fontSize="12px"
              color={descColor}
              css={{
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {description}
            </Text>
          )}
        </Stack>

        {/* Close button */}
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          flexDirection={'column'}
          py={'10px'}
          px={'12px'}
        >
          <IconButton
            variant={'ghost'}
            color={closeColor}
            size={'xs'}
            aria-label="Close toast"
            onClick={() => sonnerToast.dismiss(id)}
          >
            <FaTimes />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  )
}
