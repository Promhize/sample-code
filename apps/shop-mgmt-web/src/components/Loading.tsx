import React from 'react'
import { Spinner } from 'ui'

type Props = {
  label?: string
}

const Loading = ({ label }: Props) => <Spinner label={label} />

export default Loading
