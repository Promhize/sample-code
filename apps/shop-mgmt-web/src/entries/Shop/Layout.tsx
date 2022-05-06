import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './components/TopBar'

const Layout = () => <div className="h-screen flex flex-col">
	<TopBar />
	<div className="flex-1 flex overflow-hidden"><Outlet /></div>
</div>

export default Layout
