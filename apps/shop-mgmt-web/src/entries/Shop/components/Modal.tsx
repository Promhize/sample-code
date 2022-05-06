import React from 'react'
import { IModalProps, Modal as UIModal } from 'ui'

type Props = {
	id: string
	onOpened?: () => void
} & IModalProps

const Modal = ({ id, ...props }: Props) => <UIModal {...props}>
	<div id={id} className="h-full w-full"></div>
</UIModal>

export default Modal
