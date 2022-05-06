
import React from 'react'
import { useMemo } from 'react'
import {
	DetailsList,
	IColumn,
	IDetailsListProps,
} from 'ui'
import { Product } from '../Products'
import Row from './Row'

type ProductListProps = {
	products: Product[]
}

const columns: IColumn[] = [
	{
		minWidth: 16,
		maxWidth: 32,
		name: 'Img',
		key: 'img',
		fieldName: 'img',
		onRender: (item: any) => (
			<figure
				style={{
					backgroundImage: `url(${item.img})`,
				}}
				className="h-9 w-10 mr-3 rounded-sm bg-center bg-cover"
			></figure>
		),
		className: 'pl-2',
	},
	{
		minWidth: 12,
		name: 'Name',
		key: 'name',
		fieldName: 'name',
		onRender(item: any) {
			return (
				<span className="inline-block pt-2 font-semibold">{item.name}</span>
			)
		},
	},
	{
		minWidth: 18,
		maxWidth: 24,
		name: 'Stock',
		key: 'stock',
		fieldName: 'stock',
		isSorted: false,
		onRender(item: any) {
			return <span className="inline-block pt-2">{item.stock}</span>
		},
	},
]

const ProductsList = ({ products }: ProductListProps) => {
	const items: IDetailsListProps['items'] = useMemo(
		() =>
			products.map(({ featuredAsset, name, variants, enabled }, index) => ({
				key: index,
				img: featuredAsset.preview,
				name,
				stock: variants.reduce(
					(n, { stockAllocated, stockOnHand }) =>
						n + stockOnHand - stockAllocated,
					0,
				),
				variants,
				visible: enabled,
			})),
		[products],
	)

	return (
		<>
			<DetailsList
				items={items}
				columns={columns}
				isHeaderVisible={false}
				checkboxVisibility={2}
				selectionMode={1}
				compact
				styles={{
					root: {
						selectors: {
							'.ms-DetailsRow': {
								// BorderBottom: 'none',
								minHeight: '60px',
							},
							'.ms-DetailsRow:hover': {
								background: 'none',
							},
						},
					},
					contentWrapper: ['py-2'],
				}}
				onRenderRow={Row}
			/>
		</>
	)
}

export default ProductsList
