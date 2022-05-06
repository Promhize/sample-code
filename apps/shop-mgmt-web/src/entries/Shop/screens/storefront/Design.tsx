import React from 'react'
import MacbookPro, { widthToHeightRatio } from '../../../../assets/svg/MacbookPro'
import macbookImageUrl from '../../../../assets/images/macbook-pro-vector-image.png'
import Iphone13ProGraphite, { widthToHeightRatio as iphoneWidthToHeightRatio } from '../../../../assets/svg/Iphone13ProGraphite'
import iphoneImageUrl from '../../../../assets/images/iphone-13-pro-graphite-image2.png'
import CustomizeButtonHoc from './CustomizeButton.hoc'
import ThemeEditorModal from './ThemeEditorModal'
// Import ipadImageUrl from '../../../../assets/images/ipad-pro-space-grey-image2.png'
// import IpadProSpaceGrey, {widthToHeightRatio as ipadWidthToHeightRatio} from '../../../../assets/svg/IpadProSpaceGrey'

const Design = () =>
	<>
		<div className="flex-1 h-full p-8 overflow-y-auto">
			<div className="w-3/5 bg-white border border-solid shadow-largeCard border-gray-100 rounded ">
				<div className="px-12 py-20">
					<div className="w-full flex justify-center relative">
						<MacbookPro imageUrl={macbookImageUrl} width={600} height={600 / widthToHeightRatio} />
						{/* <IpadProSpaceGrey imageUrl={ipadImageUrl} width={400} height={400 / ipadWidthToHeightRatio} className="absolute -rotate-90 bottom-0 right-8" /> */}
						<Iphone13ProGraphite imageUrl={iphoneImageUrl} width={180} height={180 / iphoneWidthToHeightRatio} className="absolute -bottom-2 right-10" />
					</div>
				</div>
				<div className="flex justify-between items-center px-12 py-12 relative border-t border-gray-100 border-solid">
					<div>
						<div className="flex items-center">
							<h4 className="mr-2 text-3xl">Starter theme</h4>
							<span className="h-5 px-2 mt-1 leading-4 border border-gray-600 border-solid text-xs text-black rounded-full">Active</span>
						</div>
						<p>Last edited: 2 days ago</p>
					</div>
					<div>
						<CustomizeButtonHoc />
					</div>
				</div>
			</div>
		</div>
		<ThemeEditorModal />
	</>

export default Design
