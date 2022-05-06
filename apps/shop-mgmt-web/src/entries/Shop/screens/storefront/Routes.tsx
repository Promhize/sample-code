import React from 'react'
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom'
import Design from './Design'
import Layout from './Layout'

const Routes = () => <RouterRoutes>
	<Route path="/" element={<Layout />}>
		<Route path="design" element={<Design />} />
		<Route path="" element={<Navigate to="design" replace />} />
	</Route>
</RouterRoutes>

export default Routes
