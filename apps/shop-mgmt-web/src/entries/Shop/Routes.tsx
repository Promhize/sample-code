import React from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import CheckAuth from '../../components/CheckAuth'
import Layout from './Layout'
import Products from './screens/products'
import StoreFront from './screens/storefront'

const Routes = () =>
	<CheckAuth isProtected redirectUrl="/welcome/email">
		<RouterRoutes>
			<Route path="/" element={<Layout />}>
				<Route path="products/*" element={<Products />} />
				<Route path="storefront/*" element={<StoreFront />} />
				<Route path="*" element={<div>404</div>} />
			</Route>
		</RouterRoutes>
	</CheckAuth>

export default Routes
