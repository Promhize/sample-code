import React from 'react'
import { Navigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import network from '../lib/network'
import Loading from './Loading'

type Props = React.PropsWithChildren<{
	redirectUrl: string
	isProtected: boolean
}>

function CheckAuth({ children, isProtected, redirectUrl }: Props) {
	const { isLoading, data } = useQuery('auth', network.auth.isLoggedIn)

	return (<>{
		isLoading ? <div className="h-screen w-screen flex items-center justify-center"><Loading label="Loading" /></div> : data?.loggedIn === isProtected ? (
			children
		) : (
			<Navigate to={redirectUrl} />
		)
	}</>)
}

export default CheckAuth
