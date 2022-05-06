import { Plus } from 'phosphor-react'
import React from 'react'
import { BareButton, ButtonStyles } from 'ui'

type Props = {
  onClick(): void
}

const AddButton = ({ onClick }: Props) => <BareButton onClick={onClick} styles={ButtonStyles.noStyle} className="w-8 h-8 min-w-0 ml-4 flex items-center justify-center rounded-full border-0 bg-purpleX11 hover:bg-purpleX11">
  <Plus weight="fill" size={16} color="white" />
</BareButton>

export default AddButton
