import React from 'react'
import { BareButton } from 'ui'

type Props = {
  onClick(): void
}

const CustomizeButton = ({ onClick }: Props) => <BareButton onClick={onClick} className="rounded-full bg-gray-200 text-black border-none">Customize</BareButton>

export default CustomizeButton
