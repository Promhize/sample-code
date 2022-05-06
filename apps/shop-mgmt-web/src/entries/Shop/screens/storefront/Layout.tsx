import React from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import LeftSideBar from '../../components/LeftSideBar'
import { storeFrontLinkGroups } from '../../../../core/shop/modules/storefront/data'

const Layout = () => {
	const navigate = useNavigate()
	const { id } = useParams()

	return (
		<>
			<LeftSideBar navLinkProps={{
				groups: storeFrontLinkGroups,
				className: 'px-8',
				onLinkClick(e, item) {
					e?.preventDefault()
					navigate(`/shop/wholepurple/products/${item?.url}`)
				},
				selectedKey: id,
			}} pageHeadingProps={{ title: ['Storefront', ''] }} />
			<Outlet />
		</>
	)
}

export default Layout
