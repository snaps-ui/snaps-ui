import { Field, Input } from '@snaps-ui/react'

export const FieldDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      <Input placeholder="snapsui@example.com" />
    </Field.Root>
  )
}
