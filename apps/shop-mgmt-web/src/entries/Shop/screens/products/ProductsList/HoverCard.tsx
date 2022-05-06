import { Archive, Eye, LinkSimpleHorizontal, PencilSimple, Share, Trash } from 'phosphor-react'
import React from 'react'
import { BareButton, ButtonStyles } from 'ui'
import ToggleVisibility from './ToggleVisibility'

type Props = {
	item: any
}

const actions = [
	{
		icon: {
			Comp: PencilSimple,
			props: {},
		},
		label: 'Edit',
	},
	{
		icon: {
			Comp: Share,
			props: {},
		},
		label: 'Share',
	},

	{
		icon: {
			Comp: Archive,
			props: {},
		},
		label: 'Archive',
	},
	{
		icon: {
			Comp: Trash,
			props: {},
		},
		label: 'Delete',
	},
	{
		icon: {
			Comp: Eye,
			props: {},
		},
		label: 'Visibility',
		endComponent: {
			Comp: ToggleVisibility,
			props: {},
		},
	},
]

const HoverCard = ({ item }: Props) => (
	<div className="w-72 flex flex-col p-4 rounded-lg shadow-largeCard bg-white border border-gray-50 border-solid">
		<div className="pb-2 flex items-center">
			<figure
				style={{
					backgroundImage: `url(${item.img})`,
				}}
				className="h-12 w-12 mr-2 rounded-full bg-center bg-cover"
			></figure>
			<div className="flex-1">
				<h4 className="text-lg">{item.name}</h4>
			</div>
			<div className="">
				<BareButton styles={ButtonStyles.nostyle} className="px-2">
					<LinkSimpleHorizontal size={20} />
				</BareButton>
			</div>
		</div>
		{item.variants.length ? (
			<div className="flex-1 py-4 pb-1 mb-3 flex flex-wrap text-black border-t border-solid border-gray-100">
				<h4 className="mb-2 text-xs text-gray-400">Variants</h4>
				{item.variants.map(
					({ name, stockOnHand, stockAllocated, price, currencyCode }: any) => (
						<div
							key={name}
							className="w-full pr-2 mb-2 flex justify-between text-gray-600"
						>
							<h5 className="w-36 overflow-hidden text-ellipsis whitespace-nowrap ">
								{name}
							</h5>
							<p>
								{/* <span className=" text-gray-500">In stock: </span> */}
								<span className="">{stockOnHand - stockAllocated}</span>
							</p>
							<p>
								{/* <span className=" text-gray-500">Price: </span> */}
								<span className="">
									{new Intl.NumberFormat('en', {
										style: 'currency',
										currency: currencyCode,
									}).format(price / 100)}
								</span>
							</p>
						</div>
					),
				)}
			</div>
		) : null}
		<div>
			{actions.map(
				({
					label,
					icon: { Comp: Icon, props: iconProps },
					endComponent: EndComponent,
				}) => (
					<div key={label} className="w-full flex items-center border-t border-solid border-gray-50">
						<BareButton
							styles={{
								root: [
									...(ButtonStyles.nostyle.root as string[]),
									'w-full p-2 h-auto',
								],
							}}

						>

							<Icon {...iconProps} className="mr-2" />
							<span className="flex-1">{label}</span>

						</BareButton>
						{EndComponent ? (
							<EndComponent.Comp {...EndComponent.props} />
						) : null}
					</div>
				),
			)}
		</div>
	</div>
)

export default HoverCard

/**
 * Variants
 * availability
 * sales
 * cost
 * actions:
 * share
 * edit
 * inactive
 */
