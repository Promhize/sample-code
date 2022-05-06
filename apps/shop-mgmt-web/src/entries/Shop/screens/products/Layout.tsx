import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import LeftSideBar from '../../components/LeftSideBar'
import { navLinkGroups } from '../../../../core/shop/modules/products/data'
import { selectAllProducts } from '../../../../core/shop/modules/products/slice'

const Layout = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const data = { products: { items: useSelector(selectAllProducts) } }

	return (
		<>
			<LeftSideBar navLinkProps={{
				groups: navLinkGroups,
				className: 'px-8',
				onLinkClick(e, item) {
					e?.preventDefault()
					navigate(`/shop/wholepurple/products/${item?.url}`)
				},
				selectedKey: id,
			}} pageHeadingProps={{ title: ['Products', data.products.items.length] }} />
			<Outlet />
		</>
	)
}

export default Layout
