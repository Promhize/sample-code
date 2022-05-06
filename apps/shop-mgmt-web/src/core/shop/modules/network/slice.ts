import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Briph from 'briph-sdk'
import { briph } from '../../../../lib/helpers'

export const FETCH_PRODUCTS_SCREENS_DATA = 'SCREENS/PRODUCTS/DATA'
export const actions = [
	FETCH_PRODUCTS_SCREENS_DATA,
] as const

const payloadCreators: Record<typeof actions[number], Parameters<typeof createAsyncThunk>[1]> = {
	async [FETCH_PRODUCTS_SCREENS_DATA]() {
		const { data: [{ data }] } = await Briph.handleRequests({
			requests: [
				{
					request: async () => briph.client.products.findMany({}).start(),
					handlers: {},
				},
			],
		}) as any
		return data
	},
}

export const thunks = actions.map(action => ({
	thunk: createAsyncThunk(action, payloadCreators[action]),
	name: action,
}))
export const reducedThunks = thunks.reduce((acc, thunk) => ({ ...acc, [thunk.name]: thunk.thunk }), {}) as Record<typeof actions[number], ReturnType<typeof createAsyncThunk>>

export const { reducer: networkReducer } = createSlice({
	name: 'network',
	initialState: {},
	reducers: {},
	extraReducers() {
	},
})
