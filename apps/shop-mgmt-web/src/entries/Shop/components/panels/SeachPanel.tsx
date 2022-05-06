import React from 'react'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import PanelRenderer from '../PanelRenderer'

const SearchPanel = () => (
	<PanelRenderer panelId={panelIds.SEARCH}>
		<div>Search panel</div>
	</PanelRenderer>
)

export default SearchPanel
