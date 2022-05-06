import { useCallback } from 'react'
import { batch, useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { openModal, replaceModals, selectIsModalsOpen, selectModals } from './slice'

export const useIsModalIdOpen = ({ modalId }: { modalId: string }) => {
	const { isOpen } = useSelector(selectIsModalsOpen)
	const panels = useSelector(selectModals)
	const currentPanel = panels.instances.slice(-1).pop()

	return isOpen && currentPanel?.instanceId === modalId
}

export const useOpenModal = (modals: Parameters<typeof replaceModals>[0]) => {
	const dispatch = useAppDispatch()
	const openSettingsPanel = useCallback(() => {
		batch(() => {
			dispatch(replaceModals(modals))
			dispatch(openModal())
		})
	}, [])
	return openSettingsPanel
}
