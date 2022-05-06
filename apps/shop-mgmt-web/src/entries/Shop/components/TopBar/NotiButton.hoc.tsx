import React from 'react'
import { useOpenPanel } from '../../../../core/shop/modules/panels/hooks'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import NotiButton from './NotiButton'
import { getPanelConfig } from './SearchButton.hoc'

const NotiButtonHoc = () => {
	const openPanel = useOpenPanel([getPanelConfig({
		instanceId: panelIds.SEARCH,
	})])

	return <NotiButton onClick={openPanel} />
}

export default NotiButtonHoc
