import * as React from 'react'
import { SVGProps } from 'react'

type Props<T> = {
	imageUrl: string
} & SVGProps<T>

export const widthToHeightRatio = 3867 / 3610.069

const IpadProSpaceGrey = ({ imageUrl = 'ipad-pro-space-grey-image2.png', ...props }: Props<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={3867}
		height={3610.069}
		viewBox="0 0 3867 3610.069"
		{...props}
	>
		<defs>
			<radialGradient
				id="c"
				cx={0.5}
				cy={0.5}
				r={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#383055" />
				<stop offset={0.488} stopColor="#080311" />
				<stop offset={1} stopColor="#224d6e" />
			</radialGradient>
			<radialGradient
				id="d"
				cx={0.5}
				cy={0.5}
				r={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#535353" />
				<stop offset={0.488} stopColor="#191919" />
				<stop offset={1} stopColor="#070707" />
			</radialGradient>
			<pattern
				id="a"
				width={1}
				height={1}
				patternTransform="matrix(1 0 0 -1 0 624)"
				viewBox="0 0 3867 312"
			>
				<image
					preserveAspectRatio="none"
					width={3867}
					height={312}
					xlinkHref="ipad-pro-space-grey-image.png"
				/>
			</pattern>
			<pattern
				id="ipad-pro-space-grey-image"
				preserveAspectRatio="xMidYMid slice"
				width="100%"
				height="100%"
				viewBox="0 0 2048 2732"
			>
				<image
					width={2048}
					height={2732}
					xlinkHref={imageUrl}
				/>
			</pattern>
			<linearGradient
				id="b"
				x1={0.5}
				x2={0.5}
				y2={1}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#4f5053" />
				<stop offset={0.049} stopColor="#b6b7bd" />
				<stop offset={0.498} stopColor="#e6e6e6" />
				<stop offset={0.916} stopColor="#b6b7bd" />
				<stop offset={1} stopColor="#4f5053" />
			</linearGradient>
		</defs>
		{/* <path
			transform="translate(0 3298.069)"
			opacity={0.395}
			fill="url(#a)"
			d="M0 0h3867v312H0z"
		/> */}
		<path
			d="M3099.826 1.474v5.894c0 .811-.979 1.474-2.175 1.474h-142.438c-1.196 0-2.175-.663-2.175-1.474V1.474c0-.811.979-1.474 2.175-1.474h142.438c1.196 0 2.175.663 2.175 1.474Zm-145.701 5.894c0 .442.435.737 1.087.737h142.439c.652 0 1.087-.295 1.087-.737V1.474c0-.442-.435-.737-1.087-.737h-142.438c-.652 0-1.087.295-1.087.737Z"
			fill="#bfbdb5"
		/>
		<path
			d="M6642.473 2672h5.895c.811 0 1.474.979 1.474 2.174v142.439c0 1.2-.663 2.174-1.474 2.174h-5.895c-.811 0-1.473-.978-1.473-2.174v-142.439c0-1.196.663-2.174 1.473-2.174Z"
			transform="rotate(-90 3465.44 3184.402)"
			fill="url(#b)"
		/>
		<path
			d="M6642.589 2672h6.357a1.792 1.792 0 0 1 1.59 1.933v126.627a1.792 1.792 0 0 1-1.59 1.933h-6.357a1.792 1.792 0 0 1-1.589-1.933v-126.627a1.792 1.792 0 0 1 1.589-1.933Z"
			transform="translate(-3387.537 -2425.424)"
			fill="url(#b)"
		/>
		<path
			d="M6642.589 2672h6.357a1.792 1.792 0 0 1 1.59 1.933v126.627a1.792 1.792 0 0 1-1.59 1.933h-6.357a1.792 1.792 0 0 1-1.589-1.933v-126.627a1.792 1.792 0 0 1 1.589-1.933Z"
			transform="translate(-3387.537 -2257.424)"
			fill="url(#b)"
		/>
		<path
			d="M756 6.069h2351a150.994 150.994 0 0 1 151 151v3166a150.994 150.994 0 0 1-151 151H756a150.994 150.994 0 0 1-151-151v-3166a150.994 150.994 0 0 1 151-151Z"
			fill="#b6b7bd"
		/>
		<path
			d="M3107 3474.069H756c-83.3 0-151-67.7-151-151v-3166c0-83.3 67.7-151 151-151h2351c83.3 0 151 67.7 151 151v3166c0 83.3-67.7 151-151 151Zm-2351-3464c-81.1 0-147 65.9-147 147v3166c0 81.1 65.9 147 147 147h2351c81.1 0 147-65.9 147-147v-3166c0-81.1-65.9-147-147-147Z"
			fill="#4f5053"
		/>
		<path
			d="M3104 17.069H759a142.97 142.97 0 0 0-143 143v3160a142.97 142.97 0 0 0 143 143h2345a142.97 142.97 0 0 0 143-143v-3160a142.97 142.97 0 0 0-143-143Z"
			fill="#000201"
		/>
		<g transform="translate(-7481 -98.931)">
			<g transform="translate(-3182 -1419)">
				<circle
					cx={21}
					cy={21}
					r={21}
					transform="translate(12563 1556)"
					fill="#090909"
				/>
				<g transform="translate(12573.886 1566.886)">
					<circle
						cx={9}
						cy={9}
						r={9}
						transform="translate(1.114 1.114)"
						fill="url(#c)"
					/>
					<path
						d="M10.281 20.562a10.281 10.281 0 1 1 10.281-10.281 10.272 10.272 0 0 1-10.281 10.281Zm0-19.352a9.138 9.138 0 0 0-9.071 9.071 9.138 9.138 0 0 0 9.071 9.071 9.138 9.138 0 0 0 9.071-9.071 9.138 9.138 0 0 0-9.071-9.071Z"
						fill="#050203"
					/>
				</g>
			</g>
			<circle
				cx={9}
				cy={9}
				r={9}
				transform="translate(9479 149)"
				fill="url(#d)"
			/>
		</g>
		<path
			fill="#393a3d"
			d="M605 3291.069h11v21h-11zM605 189.069h11v21h-11zM3247 189.069h11v21h-11zM1428 17.069v-11h17v11zM2360 3474.069v-11h17v11zM3247 3291.069h11v21h-11z"
		/>
		<path
			d="M2389 0H45A44.94 44.94 0 0 0 0 45v3155a44.94 44.94 0 0 0 45 45h2344a44.94 44.94 0 0 0 45-45V45a44.94 44.94 0 0 0-45-45Z"
			transform="translate(715 119.069)"
			fill="url(#ipad-pro-space-grey-image)"
		/>
	</svg>
)

export default IpadProSpaceGrey
