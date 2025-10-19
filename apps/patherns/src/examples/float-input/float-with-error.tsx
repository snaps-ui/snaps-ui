import { Field } from '@snaps-ui/react'
import { FloatInput } from '@snaps-ui/react/float-input'

export const FloatWithError = () => {
  return (
    <Field.Root invalid>
      <FloatInput label="Email address" />
      <Field.Error>This is an error text</Field.Error>
    </Field.Root>
  )
}
