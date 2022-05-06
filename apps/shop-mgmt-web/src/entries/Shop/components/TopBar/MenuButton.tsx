import React from 'react'
import { List } from 'phosphor-react'

type Props = {
	onClick(): void
}

const MenuButton = ({ onClick }: Props) => <button onClick={onClick} className="mr-3 pr-3 mt-1">
	<List size={20} />
</button>

export default MenuButton
