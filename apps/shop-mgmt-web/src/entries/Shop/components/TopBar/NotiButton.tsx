import { Bell } from 'phosphor-react'
import React from 'react'
import { BareButton, ButtonStyles } from 'ui'

type Props = {
  onClick(): void
}

const NotiButton = ({ onClick }: Props) => <BareButton onClick={onClick} styles={ButtonStyles.nostyle} className="px-2 ml-2">
  <Bell size={20} />
</BareButton>

export default NotiButton
