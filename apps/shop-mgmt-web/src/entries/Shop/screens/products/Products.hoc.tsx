import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectAllProducts } from '../../../../core/shop/modules/products/slice'
import { changeLastUrl } from '../../../../core/shop/modules/view/slice'
import Products from './Products'

export const emptyData = { products: { items: [] } }

const ProductsHoc = () => {
	const data = { products: { items: useSelector(selectAllProducts) } }
	const params = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(changeLastUrl({ view: 'products', lastUrl: `products/${params['*'] ?? ''}` }))
	}, [params['*']])

	return <Products data={data} />
}

export default ProductsHoc
