'use client'

import { Spinner, type SpinnerProps } from '../spinner'

export const Loader = (props: SpinnerProps) => {
  return (
    <Spinner
      width="1.1em"
      height="1.1em"
      borderWidth="1.5px"
      aria-hidden="true"
      {...props}
    />
  )
}
