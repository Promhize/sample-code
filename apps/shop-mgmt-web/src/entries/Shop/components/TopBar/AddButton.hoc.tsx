import React from 'react'
import { useOpenPanel } from '../../../../core/shop/modules/panels/hooks'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import AddButton from './AddButton'
import { getPanelConfig } from './SearchButton.hoc'

const AddButtonHoc = () => {
	const openPanel = useOpenPanel([getPanelConfig({
		instanceId: panelIds.ADD,
	})])
	return <AddButton onClick={openPanel} />
}

export default AddButtonHoc
