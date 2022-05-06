export const modalIds = {
	THEME_EDITOR: 'THEME_EDITOR',
}
export const modalContainerSuffix = 'modal-container'
export const getModalContainerId = ({ modalId }: { modalId: string }) => `${modalContainerSuffix}-${modalId}`
