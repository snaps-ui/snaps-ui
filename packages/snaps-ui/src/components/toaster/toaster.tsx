'use client'

import { toast as sonnerToast } from 'sonner'
import {
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa'
import {
  type HTMLChakraProps,
  type UnstyledProp,
  createRecipeContext,
  chakra,
} from '@chakra-ui/react/styled-system'
import { type ToastVariantProps } from '@snaps-ui/system'

import { IconButton } from '../icon-button/index'
import { Stack } from '../stack/index'

const { withContext } = createRecipeContext({
  key: 'snapsToast',
})

export interface ToastBaseProps extends UnstyledProp, ToastVariantProps {}

export interface ToastProps
  extends Omit<HTMLChakraProps<'div'>, 'id'>,
    ToastBaseProps {
  id: string | number
  title: string
  description?: string
  status?: keyof typeof statusConfig
}

const statusConfig = {
  success: { icon: FaCheck },
  warning: { icon: FaExclamationTriangle },
  error: { icon: FaTimesCircle },
}

const StyledToast = withContext<
  HTMLDivElement,
  ToastBaseProps & HTMLChakraProps<'div'>
>('div')

function Toast(props: ToastProps) {
  const { id, title, description, status = 'success', ...rest } = props

  const { icon } = statusConfig[status]
  const RenderIcon = icon

  return (
    <StyledToast status={status} {...rest}>
      {/* Status block */}
      <chakra.div
        bg="var(--status-color)"
        py="10px"
        px="14px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <RenderIcon color="#ffffff" />
      </chakra.div>

      {/* Content */}
      <Stack flex="1" py="10px" px="20px" gap="1" justify="center">
        <chakra.p fontSize="14px" fontWeight="medium">
          {title}
        </chakra.p>
        {description && (
          <chakra.p
            fontSize="12px"
            css={{
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </chakra.p>
        )}
      </Stack>

      {/* Close button */}
      <chakra.div
        display="flex"
        alignItems="center"
        justifyContent="center"
        py="10px"
        px="12px"
      >
        <IconButton
          variant="plain"
          size="xs"
          aria-label="Close toast"
          onClick={() => sonnerToast.dismiss(id)}
        >
          <FaTimes />
        </IconButton>
      </chakra.div>
    </StyledToast>
  )
}

export const toast: typeof sonnerToast = sonnerToast

export const successToast = (props: Omit<ToastProps, 'id' | 'status'>) =>
  sonnerToast.custom((id) => <Toast id={id} status="success" {...props} />)

export const warningToast = (props: Omit<ToastProps, 'id' | 'status'>) =>
  sonnerToast.custom((id) => <Toast id={id} status="warning" {...props} />)

export const errorToast = (props: Omit<ToastProps, 'id' | 'status'>) =>
  sonnerToast.custom((id) => <Toast id={id} status="error" {...props} />)
