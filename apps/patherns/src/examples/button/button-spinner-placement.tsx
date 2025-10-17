import { HStack } from '@snaps-ui/react'
import { Button } from '@snaps-ui/react/button'

export const ButtonSpinnerPlacement = () => {
  return (
    <HStack gap={3}>
      <Button isLoading spinnerPlacement="start">
        start
      </Button>

      <Button isLoading spinnerPlacement="end">
        end
      </Button>
    </HStack>
  )
}
