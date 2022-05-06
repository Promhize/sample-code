import React from 'react'
import { Button, Dropdown, TextField } from 'ui'
import { panelIds } from '../../../../core/shop/modules/panels/utils'
import { industryOptions, salesChannels } from '../../../../core/shop/modules/store/data'
import PanelRenderer from '../PanelRenderer'

const CreateStore = () => {
	console.log('rendered')
	return (
		<PanelRenderer panelId={panelIds.CREATE_STORE}>
			<form className="h-full px-6 pt-10 pb-4 flex flex-col">
				<div className="flex-1">
					<TextField required label="Store name" className="mb-5" />
					<TextField required label="Store url" className="mb-5" />
					<Dropdown
						multiSelect
						options={industryOptions}
						label="Industry"
						required
						className="mb-5"
					/>
					<Dropdown
						options={salesChannels}
						multiSelect
						label="Where do you sell?"
						required
						className="mb-5"
					/>
				</div>
				<div className="flex">
					{/* <Button className="mr-4 bg-gray-200 border-none text-gray-700 hover:bg-gray-300 hover:text-gray-700 hover:border-none">Cancel</Button> */}
					<Button type="submit" className="flex-1">Create</Button>
				</div>
			</form>
		</PanelRenderer>
	)
}

export default CreateStore
