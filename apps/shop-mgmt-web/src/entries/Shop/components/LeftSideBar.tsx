import React from 'react'
import { INavProps, Nav, PageHeading, PageHeadingProps } from 'ui'

type Props = {
	navLinkProps: INavProps
	pageHeadingProps: PageHeadingProps
}

const LeftSideBar = ({ navLinkProps, pageHeadingProps }: Props) => (
	<div className="w-56 py-6 bg-gray-50">
		<PageHeading {...pageHeadingProps} />
		<Nav {...navLinkProps}
		/>
	</div>
)

export default LeftSideBar
