import { Field, Input } from '@snaps-ui/react'

export const FieldError = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="snapsui@example.com" />
      <Field.Error>This is an error text</Field.Error>
    </Field.Root>
  )
}
