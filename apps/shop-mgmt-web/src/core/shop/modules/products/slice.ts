import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../../../entries/Shop/screens/products/Products'
import { RootState } from '../../redux/store'
import { FETCH_PRODUCTS_SCREENS_DATA, reducedThunks } from '../network/slice'

const entity = createEntityAdapter<Product>()

export const { selectAll: selectAllProducts } = entity.getSelectors((state: RootState) => state.products)

export const { reducer: productReducer, actions: { removeProduct } } = createSlice({
	name: 'products',
	initialState: entity.getInitialState(),
	reducers: {
		removeProduct: entity.removeOne,
		addProducts: entity.upsertMany,
	},
	extraReducers(builder) {
		builder.addCase(reducedThunks[FETCH_PRODUCTS_SCREENS_DATA].fulfilled, (state, data: PayloadAction<any>) => {
			entity.upsertMany(state, data?.payload?.products?.items)
		})
	},
})

