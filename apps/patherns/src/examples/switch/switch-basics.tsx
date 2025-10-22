import { Switch } from '@snaps-ui/react/switch'

export default function SwitchBasics() {
  return (
    <Switch.Root>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Snaps UI Switch</Switch.Label>
    </Switch.Root>
  )
}
