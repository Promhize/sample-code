import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { BareButton, ButtonStyles } from 'ui'

type Props = {
  onClick(): void
}

const SearchButton = ({ onClick }: Props) => <BareButton onClick={onClick} styles={ButtonStyles.nostyle} className="px-2 ml-2">
  <MagnifyingGlass size={20} />
</BareButton>

export default SearchButton
