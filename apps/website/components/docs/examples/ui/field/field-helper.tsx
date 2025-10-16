import { Field } from '@snaps-ui/react/field'

export const FieldHelper = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Field.Input placeholder="snapsui@example.com" />
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}
