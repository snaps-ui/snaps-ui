import { Field } from '@snaps-ui/react/field'

export const FieldBasics = () => {
  return (
    <Field.Root>
      <Field.Label>Password</Field.Label>
      <Field.Input type="password" placeholder="enter your password" />
    </Field.Root>
  )
}
