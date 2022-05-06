import { INavLinkGroup } from 'ui'

export const navLinkGroups: INavLinkGroup[] = [
	{
		links: [
			{
				name: 'All',
				key: 'all',
				url: 'all',
				icon: 'ProductVariant',
			},
			{
				name: 'Products',
				key: 'only',
				url: 'only',
				icon: 'Product',
			},
			{
				name: 'Subscriptions',
				key: 'subscriptions',
				url: 'subscriptions',
				icon: 'RepeatAll',
			}
		],
	},
]
