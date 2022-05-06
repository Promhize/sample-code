import React from 'react'
import { PageSearch } from 'ui'
import { ArrowUp } from 'phosphor-react'
import { emptyData } from './Products.hoc'
import ProductsList from './ProductsList'

export type Product = {
	id: string
	name: string
	featuredAsset: {
		source: string
		preview: string
	}
	variants: {
		stockLevel: string
		stockOnHand: number
		stockAllocated: number
		name: string
	}[]
	enabled: boolean
}

type Props = {
	data: {
		products: {
			items: Product[]
		}
	}
}

const Products = ({ data = emptyData }: Props) => {
	const {
		products: { items: products },
	} = data
	return (
		<>
			<div className="w-1/4 h-full self-stretch py-6 flex flex-col border-r border-gray-100 border-solid">
				<div className="flex items-center justify-between mb-2 px-8">
					<PageSearch placeholder="Search products" />
				</div>
				<div className="flex-1 px-8 pt-4 overflow-y-auto text-gray-500">
					<ProductsList products={products} />
				</div>
			</div>
			<div className="flex-1 self-stretch p-8 px-12 ">
				<div className="mb-10">{/* <InventoryChart /> */}</div>
				<div className="mb-10 pb-10 border-b border-b-gray-100 border-solid flex items-center">
					<div className="flex-1 px-10 py-4 border-l border-solid border-l-blue-300 bg-gray-50">
						<div className="flex items-end mb-1">
							<div className="mr-2 text-2xl">8,458</div>
							<div className="flex items-center text-green-500">
								<ArrowUp />
								<span>16%</span>
							</div>
						</div>
						<p className=" text-gray-500">Total inventory</p>
					</div>
					<div className="flex-1 px-10 py-4 border-l border-solid border-l-gray-200">
						<div className="flex items-end mb-1">
							<div className="mr-2 text-2xl">8,458</div>
							<div className="flex items-center text-green-500">
								<ArrowUp />
								<span>16%</span>
							</div>
						</div>
						<p className=" text-gray-500">Total inventory</p>
					</div>
					<div className="flex-1 px-10 py-4 border-l border-solid border-l-gray-200">
						<div className="flex items-end mb-1">
							<div className="mr-2 text-2xl">8,458</div>
							<div className="flex items-center text-green-500">
								<ArrowUp />
								<span>16%</span>
							</div>
						</div>
						<p className=" text-gray-500">Total inventory</p>
					</div>
					<div className="flex-1 px-10 py-4 border-l border-solid border-l-gray-200">
						<div className="flex items-end mb-1">
							<div className="mr-2 text-2xl">8,458</div>
							<div className="flex items-center text-green-500">
								<ArrowUp />
								<span>16%</span>
							</div>
						</div>
						<p className=" text-gray-500">Total inventory</p>
					</div>
				</div>
				<div className="hidden">
					<h2 className="mb-8 text-xl font-bold">Activity & Schedule</h2>
					<ul className="grid grid-cols-2 gap-5 gap-x-16 text-gray-600 text-sm font-inter">
						{Array(8)
							.fill('')
							.map((_, i) => (
								<li key={i} className="flex items-center">
									<span
										style={{
											backgroundImage:
												'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
										}}
										className="h-6 w-6 mr-3 rounded-full bg-cover bg-center"
									></span>
									<span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
										<span className="font-semibold">Athan Travis </span>
										<span>renamed </span>
										<span className="font-semibold">Splahify 2.0</span>
									</span>
									<span className="text-gray-400 text-xs">3hrs ago</span>
								</li>
							))}
					</ul>
				</div>
				{/* <Calendar showMonthPickerAsOverlay /> */}
			</div>
		</>
	)
}

export default Products

// {products.map(
// 						({id, name, featuredAsset: {preview}, variants}: Product) => {
// 							const availableStock = variants.reduce(
// 								(n, {stockAllocated, stockOnHand}) =>
// 									n + stockOnHand - stockAllocated,
// 								0,
// 							)
// 							return (
// 								<div
// 									key={id}
// 									className="px-3 pr-2 py-3 mb-1 flex items-center justify-between group cursor-pointer hover:bg-gray-50 rounded"
// 								>
// 									<span className="mr-3">
// 										<Circle size={16} color="#aa99af" />
// 									</span>
// 									<figure
// 										style={{
// 											backgroundImage: `url(${preview})`,
// 										}}
// 										className="h-7 w-10 mr-3 rounded-sm bg-center bg-cover"
// 									></figure>
// 									<span
// 										style={{lineClamp: 1}}
// 										className="w-32 flex-1 pr-2 mr-4 text-gray-700 text-ellipsis whitespace-nowrap overflow-hidden"
// 									>
// 										{name}
// 									</span>
// 									{/* <span className="pr-2 flex">
//                     <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"></span>
//                   </span> */}
// 									<span className="w-10 mr-4">{availableStock}</span>
// 									<span className="opacity-30 group-hover:opacity-100">
// 										<DotsThree size={28} />
// 									</span>
// 								</div>
// 							)
// 						},
// 					)}
