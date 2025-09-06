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

export const toast: typeof sonnerToast = sonnerToast

type StatusType = 'success' | 'warning' | 'error'

interface ToasterProps {
  id: number | string
  title: string
  description?: string
  status?: StatusType
}

export const successToast = (props: Omit<ToasterProps, 'id'>) => {
  return sonnerToast.custom((id) => (
    <Toast id={id} status="success" {...props} />
  ))
}

export const warningToast = (props: Omit<ToasterProps, 'id'>) => {
  return sonnerToast.custom((id) => (
    <Toast id={id} status="warning" {...props} />
  ))
}

export const errorToast = (props: Omit<ToasterProps, 'id'>) => {
  return sonnerToast.custom((id) => <Toast id={id} status="error" {...props} />)
}

function Toast(props: ToasterProps) {
  const { id, title, description, status = 'success' } = props

  const statusConfig: Record<
    StatusType,
    { color: string; icon: React.ComponentType<{ color?: string }> }
  > = {
    success: { color: '#039855', icon: FaCheck },
    warning: { color: '#FACC15', icon: FaExclamationTriangle },
    error: { color: '#EF4444', icon: FaTimesCircle },
  }

  const { color, icon } = statusConfig[status]

  const RenderIcon = icon

  return (
    <Flex
      bg={'#FFFFFF'}
      border={'0.5px solid #D0D5DD'}
      p={'0px'}
      borderRadius={'5px'}
      overflow={'hidden'}
      width={'100%'}
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
          <Text fontSize="14px" fontWeight="medium">
            {title}
          </Text>
          {description && (
            <Text
              fontSize="12px"
              color="gray.600"
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
            color="gray.700"
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
