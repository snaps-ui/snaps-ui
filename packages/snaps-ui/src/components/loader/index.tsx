'use client'

import { Spinner, type SpinnerProps } from '../spinner'

type Props = {
  spinner?: React.ReactNode
} & SpinnerProps

export const Loader = (props: Props) => {
  const { spinner, ...rest } = props

  if (spinner) return <>{spinner}</>

  return (
    <Spinner
      width="1.1em"
      height="1.1em"
      borderWidth="1.5px"
      aria-hidden="true"
      {...rest}
    />
  )
}
