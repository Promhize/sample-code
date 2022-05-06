import React from 'react'
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import Layout from './Layout'
import ProductsHoc from './Products.hoc'

const Routes = () => <RouterRoutes>
	<Route path="/" element={<Layout />}>
		<Route path="all" element={<ProductsHoc />} />
		<Route path="only" element={<ProductsHoc />} />
		<Route path="subscriptions" element={<ProductsHoc />} />
		<Route path="giftcards" element={<ProductsHoc />} />
		<Route path="" element={<Navigate to="all" replace />} />
	</Route>
</RouterRoutes>

export default Routes
