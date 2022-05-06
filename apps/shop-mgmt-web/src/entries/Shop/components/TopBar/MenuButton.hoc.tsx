import React from 'react'
import { PanelType } from 'ui'
import { useOpenPanel } from '../../../../core/shop/modules/panels/hooks'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import MenuButton from './MenuButton'

const MenuButtonHoc = () => {
	const openSettingsPanel = useOpenPanel([{
		instanceId: panelIds.STORES,
		type: PanelType.customNear,
		customWidth: '320px',
	}])

	return <MenuButton onClick={openSettingsPanel} />
}

export default MenuButtonHoc
