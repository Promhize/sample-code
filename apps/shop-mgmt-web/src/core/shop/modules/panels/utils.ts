export const panelIds = {
	STORES: 'STORES',
	SEARCH: 'SEARCH',
	NOTIFICATIONS: 'NOTIFICATIONS',
	ADD: 'ADD',
	CREATE_STORE: 'CREATE_STORE',
}
export const panelContainerSuffix = 'panel-container'
export const getPanelContainerId = ({ panelId }: { panelId: string }) => `${panelContainerSuffix}-${panelId}`
