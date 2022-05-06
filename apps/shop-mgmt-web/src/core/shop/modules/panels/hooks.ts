import { useCallback } from 'react'
import { batch, useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { openPanel, replacePanels, selectIsPanelsOpen, selectPanels } from './slice'

export const useIsPanelIdOpen = ({ panelId }: { panelId: string }) => {
	const { isOpen } = useSelector(selectIsPanelsOpen)
	const panels = useSelector(selectPanels)
	const currentPanel = panels.instances.slice(-1).pop()
	return isOpen && currentPanel?.instanceId === panelId
}

export const useOpenPanel = (panels: Parameters<typeof replacePanels>[0]) => {
	const dispatch = useAppDispatch()
	const openSettingsPanel = useCallback(() => {
		batch(() => {
			dispatch(replacePanels(panels))
			dispatch(openPanel())
		})
	}, [])
	return openSettingsPanel
}
