import { combineReducers } from '@reduxjs/toolkit'
import localforage from 'localforage'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { modalsReducer } from '../modules/modals/slice'
import { networkReducer } from '../modules/network/slice'
import { panelsReducer } from '../modules/panels/slice'
import { productReducer } from '../modules/products/slice'
import { viewReducer } from '../modules/view/slice'

export type CreateReducerArgs = {
	storeName: string
}

const createReducer = ({ storeName }: CreateReducerArgs) => {
	const store = localforage.createInstance({
		name: `shop:${storeName}`,
	})

	const persistConfig = {
		key: 'root',
		storage: store,
		stateReconciler: autoMergeLevel2,
	}

	const reducers = combineReducers({
		products: productReducer,
		network: networkReducer,
		panels: panelsReducer,
		view: viewReducer,
		modals: modalsReducer,
	})

	// @ts-expect-error
	return persistReducer(persistConfig, reducers) as typeof reducers
}

export default createReducer
