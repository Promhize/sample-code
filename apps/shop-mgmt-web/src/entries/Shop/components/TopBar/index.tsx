import React from 'react'
import { Tabs } from 'ui'
import { useNavigate } from 'react-router-dom'
import MenuButtonHoc from './MenuButton.hoc'
import StoresPanel from '../panels/StoresPanel'
import { useSelector } from 'react-redux'
import {
	selectInboxViewLastUrl,
	selectProductViewLastUrl,
} from '../../../../core/shop/modules/view/slice'
import { useMemo } from 'react'
import SearchButtonHoc from './SearchButton.hoc'
import NotiButtonHoc from './NotiButton.hoc'
import AddButtonHoc from './AddButton.hoc'
import NotificationsPanel from '../panels/NotificationsPanel'
import AddPanel from '../panels/AddPanel'
import SearchPanel from '../panels/SeachPanel'

const TopBar = () => {
	const navigate = useNavigate()
	const productsLastUrl = useSelector(selectProductViewLastUrl)
	const inboxLastUrl = useSelector(selectInboxViewLastUrl)
	const menuItems = useMemo(
		() => [
			{
				headerText: 'Promise\'s store',
				url: 'home',
			},
			{
				headerText: 'Products',
				url: `${productsLastUrl}`,
			},
			{
				headerText: 'Inbox',
				url: inboxLastUrl,
			},
			// {
			// 	headerText: 'Sales',
			// 	url: 'sales/',
			// },
			// {
			// 	headerText: 'Data',
			// 	url: 'data',
			// },
			{
				headerText: 'Storefront',
				url: 'storefront',
			},
		],
		[productsLastUrl, inboxLastUrl],
	)

	return (
		<header className="h-16 px-8 flex items-center justify-between bg-white border-b border-gray-100 border-solid">
			<div className="flex items-center">
				<MenuButtonHoc />
				{/* <span className="mr-6 font-medium">Promise&apos;s store</span> */}
				<span>
					<Tabs
						tabs={menuItems.map(({ headerText, url }) => ({
							headerText,
							itemKey: headerText.toLowerCase(),
							linkText: url,
						}))}
						linkFormat="links"
						onLinkClick={item => {
							navigate(item?.props?.linkText as string)
						}}
						styles={{
							linkIsSelected: {
								selectors: {
									'&:before': {
										width: '40%',
										margin: 'auto',
										backgroundColor: '#000',
									},
								},
							},
							link: {
								height: '4rem',
								lineHeight: '4rem',
							},
						}}
						selectedKey={location.href.split('/')[5]}
					/>
				</span>
			</div>
			<div className="flex items-center">
				<SearchButtonHoc />
				<NotiButtonHoc />
				<AddButtonHoc />
			</div>
			<StoresPanel />
			<SearchPanel />
			<NotificationsPanel />
			<AddPanel />
		</header>
	)
}

export default TopBar
