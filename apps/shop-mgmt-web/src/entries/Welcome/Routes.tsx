import React from 'react'
import { Navigate, Outlet, Route, Routes as RouterRoutes } from 'react-router-dom'
import CheckAuth from '../../components/CheckAuth'
import EmailHoc from './screens/Email.hoc'
import SignupHoc from './screens/Signup.hoc'
import VerifyHoc from './screens/Verify.hoc'

const Layout = () => <div className="h-screen w-screen flex flex-col items-center justify-center"><Outlet /></div>

const Routes = () => (
	<CheckAuth isProtected redirectUrl="/shops">
		<RouterRoutes>
			<Route path="/" element={<Layout />}>
				<Route path="email" element={<EmailHoc />} />
				<Route path="verify" element={<VerifyHoc />} />
				<Route path="signup" element={<SignupHoc />} />
				<Route path="" element={<Navigate to="email" />} />
			</Route>
		</RouterRoutes>
	</CheckAuth>
)

export default Routes
