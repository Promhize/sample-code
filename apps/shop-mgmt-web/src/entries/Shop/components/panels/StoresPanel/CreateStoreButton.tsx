import { PlusCircle } from 'phosphor-react'
import React from 'react'
import { BareButton, ButtonStyles, PanelType } from 'ui'
import { useOpenPanel } from '../../../../../core/shop/modules/panels/hooks'
import { panelIds } from '../../../../../core/shop/modules/panels/utils'

const CreateStoreButton = () => {
	const openCreateStorePanel = useOpenPanel([{
		instanceId: panelIds.CREATE_STORE,
		type: PanelType.customNear,
		customWidth: '540px',
		headerText: 'Create store',
		styles: {
			contentInner: ['p-4 px-6'],
		},
		isLightDismiss: false,
	}])
	return <BareButton onClick={openCreateStorePanel} styles={ButtonStyles.nostyle}>
		<div className="w-full px-1 flex justify-start items-center">
			<PlusCircle size={16} className="mr-2" />
			Create a store
		</div>
	</BareButton>
}

export default CreateStoreButton
