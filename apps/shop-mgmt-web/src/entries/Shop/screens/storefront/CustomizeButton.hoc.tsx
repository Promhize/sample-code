import React from 'react'
import { useOpenModal } from '../../../../core/shop/modules/modals/hooks'
import { modalIds } from '../../../../core/shop/modules/modals/utils'
import CustomizeButton from './CustomizeButton'

const CustomizeButtonHoc = () => {
	const openModal = useOpenModal([{
		instanceId: modalIds.THEME_EDITOR,
		styles: {
			main: {
				width: 'calc(100vw - 6rem)',
				height: 'calc(100vh - 4rem)',
			},
		},
	}])

	return <CustomizeButton onClick={openModal} />
}

export default CustomizeButtonHoc
