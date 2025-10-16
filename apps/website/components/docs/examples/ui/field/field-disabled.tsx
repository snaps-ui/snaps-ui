import { Field } from '@snaps-ui/react/field'

export const FieldDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      <Field.Input placeholder="snapsui@example.com" />
    </Field.Root>
  )
}
