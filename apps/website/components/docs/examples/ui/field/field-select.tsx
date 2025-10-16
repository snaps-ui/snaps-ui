import { Field } from '@snaps-ui/react/field'

export const FieldSelect = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Field.Select>
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.Error>Error Info</Field.Error>
    </Field.Root>
  )
}
