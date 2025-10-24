import type { ReactNode } from 'react'
import { Table as SnapsTable } from '@snaps-ui/react/table'

interface TableProps {
  children?: ReactNode
}

export const Table = (props: SnapsTable.RootProps & TableProps) => {
  return (
    <SnapsTable.ScrollArea>
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

export const TableHeader = (props: TableProps) => {
  return <SnapsTable.Header {...props}>{props.children}</SnapsTable.Header>
}

export const TableBody = (props: TableProps) => {
  return <SnapsTable.Body {...props}>{props.children}</SnapsTable.Body>
}

export const TableRow = (props: TableProps) => {
  return <SnapsTable.Row {...props}>{props.children}</SnapsTable.Row>
}

export const TableHeadCell = (props: TableProps) => {
  return <SnapsTable.HeadCell {...props}>{props.children}</SnapsTable.HeadCell>
}

export const TableCell = (props: TableProps) => {
  return <SnapsTable.Cell {...props}>{props.children}</SnapsTable.Cell>
}

export const TableFooter = (props: TableProps) => {
  return <SnapsTable.Footer {...props}>{props.children}</SnapsTable.Footer>
}
