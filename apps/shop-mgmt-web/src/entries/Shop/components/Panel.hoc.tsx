import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closePanel, openedPanel, selectPanels } from '../../../core/shop/modules/panels/slice'
import { getPanelContainerId } from '../../../core/shop/modules/panels/utils'
import Panel from './Panel'

const PanelHoc = () => {
	const dispatch = useDispatch()
	const panels = useSelector(selectPanels)
	const currentPanel = panels.instances.slice(-1).pop()
	const onDismiss = () => {
		dispatch(closePanel())
	}

	const onOpened = () => {
		dispatch(openedPanel())
	}

	if (!currentPanel) {
		return null
	}

	const instanceId = getPanelContainerId({ panelId: currentPanel.instanceId })

	return <Panel isLightDismiss={true} {...currentPanel} isOpen={panels.isOpen} id={instanceId} onDismiss={onDismiss} onOpened={onOpened} />
}

export default PanelHoc
