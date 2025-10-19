import { Field } from '@snaps-ui/react'
import { FloatInput } from '@snaps-ui/react/float-input'

export const FloatWithHelper = () => {
  return (
    <Field.Root>
      <FloatInput label="Email Your Name" />
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}
