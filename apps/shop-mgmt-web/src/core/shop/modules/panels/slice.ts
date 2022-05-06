import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../redux/store'
import { IPanelProps } from 'ui'

export type PanelState = {
	isOpen: boolean
	isOpened: boolean
	instances: {
		instanceId: string
		type?: IPanelProps['type']
		customWidth?: IPanelProps['customWidth']
		styles?: IPanelProps['styles']
		isBlocking?: IPanelProps['isBlocking']
		headerText?: IPanelProps['headerText']
		isLightDismiss?: IPanelProps['isLightDismiss']
	}[]
}

const initialState: PanelState = {
	isOpen: false,
	isOpened: false,
	instances: [],
}

export const { reducer: panelsReducer, actions: { closePanel, openPanel, addPanel, replacePanels, openedPanel } } = createSlice({
	name: 'panels',
	initialState,
	reducers: {
		closePanel(state) {
			state.isOpen = false
			state.isOpened = false
		},
		openPanel(state) {
			state.isOpen = true
		},
		addPanel(state, action: PayloadAction<PanelState['instances'][number]>) {
			state.instances.push(action.payload)
		},
		replacePanels(state, action: PayloadAction<PanelState['instances'][number][]>) {
			state.instances = action.payload
		},
		openedPanel(state) {
			state.isOpened = true
		},
	},
	extraReducers() { },
})

export const selectPanels = createSelector((state: RootState) => state, state => state.panels)
export const selectIsPanelsOpen = createSelector((state: RootState) => state, state => ({ isOpen: state.panels.isOpen, isOpened: state.panels.isOpened }))
