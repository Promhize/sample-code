import React from 'react'
import { Panel as UIPanel } from 'ui'
import { IPanelProps } from 'ui'

type Props = {
	id: string
	onOpened: () => void
} & IPanelProps

const Panel = ({ id, ...props }: Props) => <UIPanel {...props}>
	<div id={id} className="h-full w-full"></div>
</UIPanel>

export default Panel
