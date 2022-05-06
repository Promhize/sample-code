import React from 'react'
import { PanelType } from 'ui'
import { useOpenPanel } from '../../../../core/shop/modules/panels/hooks'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import SearchButton from './SearchButton'

type PanelConfig = Parameters<typeof useOpenPanel>[0][number]

export const getPanelConfig = ({
	instanceId,
}: {
	instanceId: PanelConfig['instanceId']
}): PanelConfig => ({
	instanceId,
	type: PanelType.custom,
	customWidth: '420px',
	isBlocking: false,
	styles: {
		root: {
			height: 'calc(100vh - 64px)',
			top: '64px',
			position: 'absolute',
		},
		main: {
			boxShadow: '-1px 8px 10px rgba(0,0,0,0.1)',
		},
	},
})

const SearchButtonHoc = () => {
	const openPanel = useOpenPanel([
		getPanelConfig({ instanceId: panelIds.SEARCH }),
	])

	return <SearchButton onClick={openPanel} />
}

export default SearchButtonHoc
