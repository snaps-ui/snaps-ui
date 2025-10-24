import { Table as SnapsTable } from '@snaps-ui/react/table'

export const Table = (
  props: SnapsTable.RootProps & { children: React.ReactNode }
) => {
  return (
    <SnapsTable.ScrollArea
      css={{
        overflowX: 'auto',
        maxWidth: '100%',
        paddingBottom: '1rem',
      }}
    >
      <SnapsTable.Root
        size="sm"
        variant="subtle"
        {...props}
        css={{
          marginTop: '2em',
          marginBottom: '2em',
        }}
      >
        {props.children}
      </SnapsTable.Root>
    </SnapsTable.ScrollArea>
  )
}
