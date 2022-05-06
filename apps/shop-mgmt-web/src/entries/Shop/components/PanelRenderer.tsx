import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsPanelIdOpen } from '../../../core/shop/modules/panels/hooks'
import { getPanelContainerId } from '../../../core/shop/modules/panels/utils'

type Props = {
	panelId: string
	children: React.ReactChild
}

function getContainer(setContainer: any, id: string) {
	const container = document.getElementById(id)
	if (container) {
		setContainer(container)
	} else {
		setTimeout(() => getContainer(setContainer, id), 50)
	}
}

const PanelRenderer = ({ panelId, children }: Props) => {
	const isOpen = useIsPanelIdOpen({ panelId })
	const id = getPanelContainerId({ panelId })
	const [container, setContainer] = useState(document.getElementById(id))

	useEffect(() => {
		if (isOpen && !container) {
			setTimeout(() => getContainer(setContainer, id), 50)
		}

		if (!isOpen && container) {
			setContainer(null)
		}
	}, [isOpen, container])

	return container && isOpen ? createPortal(children, container) : null
}

export default PanelRenderer
