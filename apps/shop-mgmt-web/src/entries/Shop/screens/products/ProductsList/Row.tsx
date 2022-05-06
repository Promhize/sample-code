import React from 'react'
import { DetailsRow, IDetailsListProps, Tooltip } from 'ui'
import HoverCard from './HoverCard'

const Row: IDetailsListProps['onRenderRow'] = rowProps => {
	const styles = {}
	const id = `product-row-${rowProps?.itemIndex.toString()!}`
	return (
		<div>
			<Tooltip
				content={<HoverCard item={rowProps?.item} />}
				delay={[0, 0]}
				animation={false}
				placement="right-start"
				offset={[0, 0]}
				interactive
				appendTo={document.body}
			// Visible={rowProps?.itemIndex === 4}
			>
				<div className="">
					<DetailsRow
						{...rowProps}
						item={rowProps?.item}
						itemIndex={rowProps?.itemIndex!}
						styles={styles}
						getRowAriaDescribedBy={() => id}
						className="flex items-center"
					/>
				</div>
			</Tooltip>
		</div>
	)
}

export default Row
