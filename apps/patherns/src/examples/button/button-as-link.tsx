import { Button } from '@snaps-ui/react/button'

export const ButtonAsLink = () => {
  return (
    <Button asChild>
      <a
        href="https://snaps-ui.vercel.app"
        target="_blank"
        style={{ color: 'green' }}
      >
        Snaps UI
      </a>
    </Button>
  )
}
