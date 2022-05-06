import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ModalHoc from './components/Modal.hoc'
import PanelHoc from './components/Panel.hoc'
import CreateStore from './components/panels/CreateStore'
import Routes from './Routes'
import { createStore } from '../../core/shop/redux/store'

const Shop = () => {
	const { persistor, store } = createStore({ storeName: 'test' })

	// @ts-expect-error
	return <Provider store={store}>
		<PersistGate persistor={persistor}>
			<Routes />
			<PanelHoc />
			<ModalHoc />
			<CreateStore />
		</PersistGate>
	</Provider>
}

export default Shop
