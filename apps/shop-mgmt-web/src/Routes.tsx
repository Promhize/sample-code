import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Shops from './entries/Shops'
import Shop from './entries/Shop'
import Welcome from './entries/Welcome'

function App() {
	return (
		<Routes>
			<Route path="/shops/*" element={<Shops />} />
			<Route path="/welcome/*" element={<Welcome />} />
			<Route path="/shop/:shop/*" element={<Shop />} />
		</Routes>
	)
}

export default App
