import { Field } from '@snaps-ui/react/field'

export const FieldTextarea = () => {
  return (
    <Field.Root>
      <Field.Label>Password</Field.Label>
      <Field.Textarea placeholder="Enter Bio..." />
    </Field.Root>
  )
}
