import React from 'react'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import PanelRenderer from '../PanelRenderer'

const NotificationsPanel = () => (
	<PanelRenderer panelId={panelIds.NOTIFICATIONS}>
		<div>Notifications panel</div>
	</PanelRenderer>
)

export default NotificationsPanel
