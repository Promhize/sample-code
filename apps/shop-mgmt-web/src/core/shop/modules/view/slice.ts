import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'

const initialState = {
	products: {
		lastUrl: 'products/',
	},
	inbox: {
		lastUrl: 'inbox/',
	},
}

type ChangeUrlPayload = {
	view: keyof typeof initialState,
	lastUrl: string
}

export const { reducer: viewReducer, actions: { changeLastUrl } } = createSlice({
	name: 'view',
	initialState,
	reducers: {
		changeLastUrl(state, action: PayloadAction<ChangeUrlPayload>) {
			state[action.payload.view].lastUrl = action.payload.lastUrl
		},
	},
})

export const selectProductViewLastUrl = createSelector((state: RootState) => state.view.products, ({ lastUrl }) => lastUrl)
export const selectInboxViewLastUrl = createSelector((state: RootState) => state.view.inbox, ({ lastUrl }) => lastUrl)
