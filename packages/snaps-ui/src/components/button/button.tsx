'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { styled } from '@snaps-ui/styled-system/jsx'
import { buttonRecipe } from '@snaps-ui/styled-system/recipes'
import { type ComponentProps } from '@snaps-ui/styled-system/types'

import { Loader } from '../loader'

const StyledButton = styled(ark.button, buttonRecipe)

interface LoadingButtonProps {
  isLoading?: boolean
  loadingText?: React.ReactNode
  spinnerPlacement?: 'start' | 'end'
}

export type ButtonBaseProps = ComponentProps<typeof StyledButton>

export interface ButtonProps extends ButtonBaseProps, LoadingButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      isLoading,
      loadingText,
      spinnerPlacement = 'start',
      children,
      asChild,
      disabled,
      ...rest
    } = props

    const checkDisabled = isLoading || disabled

    const buttonContent = (
      <>
        {isLoading && spinnerPlacement === 'start' && !loadingText && (
          <Loader />
        )}
        {isLoading && loadingText ? loadingText : children}
        {isLoading && spinnerPlacement === 'end' && !loadingText && <Loader />}
      </>
    )

    if (asChild) {
      return (
        <StyledButton asChild disabled={checkDisabled} {...rest} ref={ref}>
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton disabled={checkDisabled} {...rest} ref={ref}>
        {buttonContent}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
