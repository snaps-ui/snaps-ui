import { Field, Input } from '@snaps-ui/react'

export const FieldHelper = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="snapsui@example.com" />
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}
