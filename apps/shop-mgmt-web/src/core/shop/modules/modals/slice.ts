import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModalProps } from 'ui'
import { RootState } from '../../redux/store'

type ModalsState = {
	isOpen: boolean
	isOpened: boolean
	instances: {
		instanceId: string
		styles?: IModalProps['styles']
		isBlocking?: IModalProps['isBlocking']
	}[]
}

const initialState: ModalsState = {
	isOpen: false,
	isOpened: false,
	instances: [],
}

export const { reducer: modalsReducer, actions: { closeModal, openModal, replaceModals } } = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		openModal(state) {
			state.isOpen = true
		},
		closeModal(state) {
			state.isOpen = false
			state.isOpened = false
		},
		addModal(state, action: PayloadAction<ModalsState['instances'][number]>) {
			state.instances.push(action.payload)
		},
		replaceModals(state, action: PayloadAction<ModalsState['instances'][number][]>) {
			state.instances = action.payload
		},
	},
})

export const selectModals = createSelector((state: RootState) => state.modals, state => state)
export const selectIsModalsOpen = createSelector((state: RootState) => state.modals, state => ({ isOpen: state.isOpen, isOpened: state.isOpened }))
