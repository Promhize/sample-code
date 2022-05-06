import React from 'react'
import { useSelector } from 'react-redux'
import { closeModal, selectModals } from '../../../core/shop/modules/modals/slice'
import { getModalContainerId } from '../../../core/shop/modules/modals/utils'
import { useAppDispatch } from '../../../core/shop/redux/store'
import Modal from './Modal'

const ModalHoc = () => {
	const dispatch = useAppDispatch()
	const panels = useSelector(selectModals)
	const currentPanel = panels.instances.slice(-1).pop()
	const onDismiss = () => {
		dispatch(closeModal())
	}

	if (!currentPanel) {
		return null
	}

	const instanceId = getModalContainerId({ modalId: currentPanel.instanceId })

	return <Modal id={instanceId} onDismiss={onDismiss} isOpen={panels.isOpen} {...currentPanel} />
}

export default ModalHoc
