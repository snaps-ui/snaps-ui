import { Field } from '@snaps-ui/react/field'

export const FieldError = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Email</Field.Label>
      <Field.Input placeholder="snapsui@example.com" />
      <Field.Error>This is an error text</Field.Error>
    </Field.Root>
  )
}
