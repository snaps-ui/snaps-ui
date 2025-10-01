import { defineSlotRecipe } from '@pandacss/dev'

export const cardSlotRecipe = defineSlotRecipe({
  className: 'card',
  slots: ['root', 'body', 'header', 'footer', 'title', 'description'],
  base: {
    root: {
      background: 'bg.default',
      borderRadius: 's3',
      boxShadow: 'md',
      position: 'relative',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    body: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      pb: '3',
      px: '4',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      padding: '3',
      gap: '2',
    },
    title: {
      color: 'fg.default',
      textStyle: 'lg',
      fontWeight: 'semibold',
    },
    description: {
      color: 'fg.muted',
      textStyle: 'sm',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      pb: '5',
      pt: '2',
      px: '4',
    },
  },
})
