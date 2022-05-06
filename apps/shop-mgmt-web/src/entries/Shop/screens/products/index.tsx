import React from 'react'
import Routes from './Routes'
import { useEffect } from 'react'
import { FETCH_PRODUCTS_SCREENS_DATA, reducedThunks } from '../../../../core/shop/modules/network/slice'
import { useAppDispatch } from '../../../../core/shop/redux/store'

const Products = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		const action = reducedThunks[FETCH_PRODUCTS_SCREENS_DATA]({})
		dispatch(action)
	}, [])
	return <Routes />
}

export default Products
