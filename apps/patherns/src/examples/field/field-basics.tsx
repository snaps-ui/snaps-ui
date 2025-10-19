import { Field, Input } from '@snaps-ui/react'

export const FieldBasics = () => {
  return (
    <Field.Root>
      <Field.Label>Password</Field.Label>
      <Input type="password" placeholder="enter your password" />
    </Field.Root>
  )
}
