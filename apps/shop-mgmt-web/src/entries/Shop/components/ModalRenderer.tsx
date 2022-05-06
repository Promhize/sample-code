import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useIsModalIdOpen } from '../../../core/shop/modules/modals/hooks'
import { getModalContainerId } from '../../../core/shop/modules/modals/utils'

type Props = {
	modalId: string
	children: React.ReactChild
}

const ModalRenderer = ({ modalId, children }: Props) => {
	const isOpen = useIsModalIdOpen({ modalId })
	const id = getModalContainerId({ modalId })
	const [container, setContainer] = useState(document.getElementById(id))
	useEffect(() => {
		if (isOpen && !container) {
			const interval = setInterval(() => {
				setContainer(document.getElementById(id))
			}, 50)
			return () => clearInterval(interval)
		}

		if (!isOpen && container) {
			setContainer(null)
		}
	}, [isOpen, container])

	return container && isOpen ? createPortal(children, container) : null
}

export default ModalRenderer
