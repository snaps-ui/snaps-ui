import { Field } from '@snaps-ui/react'
import { FloatInput } from '@snaps-ui/react/float-input'

export const FloatWithDisabled = () => {
  return (
    <Field.Root disabled>
      <FloatInput label="snapsui@example.com" />
    </Field.Root>
  )
}
