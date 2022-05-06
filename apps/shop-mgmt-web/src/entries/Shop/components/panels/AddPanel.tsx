import React from 'react'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import PanelRenderer from '../PanelRenderer'

const AddPanel = () => (
	<PanelRenderer panelId={panelIds.ADD}>
		<div>Add panel</div>
	</PanelRenderer>
)

export default AddPanel
