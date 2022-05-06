import * as React from 'react'
import { SVGProps } from 'react'

type Props<T> = {
	imageUrl: string
} & SVGProps<T>

export const widthToHeightRatio = 4017 / 2445.689

const SvgComponent = ({ imageUrl = 'macbook-pro-vector-image.png', width = 240, height = 240 / widthToHeightRatio, ...props }: Props<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={width}
		height={height}
		viewBox="0 0 4017 2445.689"
		{...props}
	>
		<defs>
			<linearGradient
				id="c"
				x1={0.02}
				y1={0.5}
				x2={0.978}
				y2={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#5f5f5f" />
				<stop offset={0.149} stopColor="#2c2c2c" />
				<stop offset={0.487} stopColor="#4b4b4b" />
				<stop offset={0.836} stopColor="#2b2b2b" />
				<stop offset={1} stopColor="#5e5e5e" />
			</linearGradient>
			<linearGradient
				id="d"
				x1={0.02}
				y1={0.5}
				x2={0.978}
				y2={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#bdbebf" />
				<stop offset={0.149} stopColor="#737476" />
				<stop offset={0.487} stopColor="#cbccce" />
				<stop offset={0.836} stopColor="#77787a" />
				<stop offset={1} stopColor="#b7b8ba" />
			</linearGradient>
			<linearGradient
				id="e"
				x1={0.5}
				x2={0.5}
				y2={1}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#252525" />
				<stop offset={1} stopColor="#101010" />
			</linearGradient>
			<linearGradient
				id="f"
				x1={0.5}
				x2={0.5}
				y2={1}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#d8d9db" />
				<stop offset={0.212} stopColor="#d8d9db" />
				<stop offset={0.551} stopColor="#87888a" />
				<stop offset={0.724} stopColor="#87888a" />
				<stop offset={0.941} stopColor="#c4c5c7" />
				<stop offset={1} stopColor="#9d9d9d" />
			</linearGradient>
			<linearGradient
				id="h"
				y1={0.5}
				x2={0.992}
				y2={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#424345" />
				<stop offset={0.034} stopColor="#d2d3d5" />
				<stop offset={0.212} stopColor="#f3f4f6" />
				<stop offset={0.491} stopColor="#f6f7f9" />
				<stop offset={0.759} stopColor="#f3f4f6" />
				<stop offset={0.963} stopColor="#d2d3d5" />
				<stop offset={1} stopColor="#424345" />
			</linearGradient>
			<radialGradient
				id="a"
				cx={0.011}
				cy={0}
				r={0.011}
				gradientTransform="skewX(.008) scale(1 75.229)"
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#fff" />
				<stop offset={1} stopColor="#d8d9db" stopOpacity={0} />
			</radialGradient>
			<radialGradient
				id="g"
				cx={0.989}
				r={0.011}
				gradientTransform="matrix(-1 0 -.011 75.229 1.979 0)"
				xlinkHref="#a"
			/>
			<radialGradient
				id="i"
				cx={0.5}
				cy={0.5}
				r={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#396ab1" />
				<stop offset={1} stopColor="#101012" />
			</radialGradient>
			<pattern
				id="b"
				preserveAspectRatio="xMidYMid slice"
				width="100%"
				height="100%"
				viewBox="0 0 1968 1272"
			>
				<image
					width={1968}
					height={1272}
					xlinkHref={imageUrl}
				/>
			</pattern>
			<filter
				id="j"
				x={2032}
				y={45}
				width={40}
				height={40}
				filterUnits="userSpaceOnUse"
			>
				<feOffset />
				<feGaussianBlur stdDeviation={5} result="q" />
				<feFlood floodColor="#1dff00" floodOpacity={0.961} />
				<feComposite operator="in" in2="q" />
				<feComposite in="SourceGraphic" />
			</filter>
		</defs>
		<path d="M0 0h3290v2128H0Z" transform="translate(365 49)" fill="url(#b)" />
		<path
			d="M3604 2368H414a99.722 99.722 0 0 1-19.952-2.012 98.446 98.446 0 0 1-35.4-14.9 99.291 99.291 0 0 1-35.87-43.558 98.439 98.439 0 0 1-5.769-18.584A99.753 99.753 0 0 1 315 2269V83a83.6 83.6 0 0 1 1.687-16.727 82.522 82.522 0 0 1 12.489-29.679 83.25 83.25 0 0 1 36.518-30.071 82.527 82.527 0 0 1 15.58-4.836A83.6 83.6 0 0 1 398 0h3222a83.6 83.6 0 0 1 16.728 1.686 82.544 82.544 0 0 1 29.679 12.489 83.241 83.241 0 0 1 30.071 36.517 82.452 82.452 0 0 1 4.836 15.58A83.6 83.6 0 0 1 3703 83v2186a99.693 99.693 0 0 1-2.012 19.952 98.452 98.452 0 0 1-14.9 35.4 99.281 99.281 0 0 1-43.558 35.869 98.49 98.49 0 0 1-18.583 5.769A99.727 99.727 0 0 1 3604 2368ZM402 49a36.806 36.806 0 0 0-33.284 21.829c-1.877 4.44-3.5 9.331-3.5 14.194l-.269 2091.6 3290.172.3L3655 85.016a35.973 35.973 0 0 0-36-36.015Z"
			fill="#b4b4b4"
			opacity={0.735}
		/>
		<path
			d="M0 0h215l-7.071 9.345H6.447Z"
			transform="translate(3599.422 2436.345)"
			fill="url(#c)"
		/>
		<path
			d="M0 0h215l-7.071 9.345H6.447Z"
			transform="translate(205.422 2436.345)"
			fill="url(#c)"
		/>
		<path
			d="m3601.322 2437.345 5.072 7.345h200.459l5.558-7.345h-211.089m-1.9-1h215l-7.071 9.345h-201.482ZM207.322 2437.345l5.072 7.345h200.459l5.558-7.345H207.322m-1.9-1h215l-7.071 9.345H211.869Z"
			fill="#202322"
		/>
		<path
			d="m-2584.628 1963.645 8.827 8.847 215.182.025 9.208-9.079Z"
			transform="translate(6175 463.853)"
			fill="url(#d)"
		/>
		<path
			d="m-2584.628 1963.645 8.827 8.847 215.182.025 9.208-9.079Z"
			transform="translate(2781 463.853)"
			fill="url(#d)"
		/>
		<path
			d="m3821.148 2428.292-228.368.2 6.833 6.849 214.357.025 7.177-7.077m2.441-1-9.208 9.079-215.182-.025-8.827-8.847ZM427.148 2428.292l-228.368.2 6.833 6.849 214.357.025 7.177-7.077m2.441-1-9.208 9.079-215.182-.025-8.827-8.847Z"
			fill="#969998"
		/>
		<path
			d="M320.5 2209.001v-2126a78.632 78.632 0 0 1 1.584-15.721 77.6 77.6 0 0 1 11.736-27.892 78.481 78.481 0 0 1 21.07-21.067 77.623 77.623 0 0 1 27.89-11.736 78.666 78.666 0 0 1 15.72-1.584h3221a78.663 78.663 0 0 1 15.721 1.584 77.623 77.623 0 0 1 27.89 11.736 78.192 78.192 0 0 1 28.261 34.317 77.663 77.663 0 0 1 4.545 14.643 78.632 78.632 0 0 1 1.583 15.72v2126ZM387.487 52.828A35.973 35.973 0 0 0 365.5 86.001v2090h3289v-2090a35.962 35.962 0 0 0-36-36h-1424v.013a8.51 8.51 0 0 0-8 8.363v31.624a21 21 0 0 1-21 21h-310c-.315 0-.633-.008-.946-.02a21 21 0 0 1-20.054-20.98V58.154a8.279 8.279 0 0 0-2.369-5.674 8.5 8.5 0 0 0-4.8-2.479H401.5a35.785 35.785 0 0 0-14.013 2.827Z"
			fill="#0d0d0d"
		/>
		<path
			d="m.487-.1 3377 .1v63.62c0 26.492-15.508 40.245-26 40.245L16.1 103.01C5.6 103.01.487 74.819.487 63.52Z"
			transform="translate(320 2207.887)"
			fill="url(#e)"
		/>
		<path d="M321.487 2208.787v62.62a91.268 91.268 0 0 0 3.826 23.69 39.156 39.156 0 0 0 4.74 10.65c1.91 2.755 3.944 4.151 6.045 4.151l3335.39.851a16.231 16.231 0 0 0 7.987-2.428 28.818 28.818 0 0 0 8.156-7.37 40.431 40.431 0 0 0 6.32-12.29 55.869 55.869 0 0 0 2.539-17.158v-62.616l-3375.003-.1m-1-1 3377 .1v63.62c0 26.492-15.508 40.245-26 40.245l-3335.387-.855c-10.5 0-15.613-28.191-15.613-39.49Z" />
		<path d="M399 14a67.674 67.674 0 0 0-38.018 11.612 68.2 68.2 0 0 0-24.639 29.92A67.57 67.57 0 0 0 331 82v2188a20.982 20.982 0 0 0 21 21h3316a20.982 20.982 0 0 0 21-21V82a67.674 67.674 0 0 0-11.612-38.018 68.2 68.2 0 0 0-29.92-24.639A67.57 67.57 0 0 0 3621 14H399m0-2h3222a70 70 0 0 1 70 70v2188a23 23 0 0 1-23 23H352a23 23 0 0 1-23-23V82a70 70 0 0 1 70-70Z" />
		<path
			d="M0 0h215l-7.071 9.345H6.447Z"
			transform="translate(3599.422 2436.345)"
			fill="url(#c)"
		/>
		<path
			d="M0 0h215l-7.071 9.345H6.447Z"
			transform="translate(205.422 2436.345)"
			fill="url(#c)"
		/>
		<path
			d="m3601.322 2437.345 5.072 7.345h200.459l5.558-7.345h-211.089m-1.9-1h215l-7.071 9.345h-201.482ZM207.322 2437.345l5.072 7.345h200.459l5.558-7.345H207.322m-1.9-1h215l-7.071 9.345H211.869Z"
			fill="#202322"
		/>
		<path
			d="m-2584.628 1963.645 8.827 8.847 215.182.025 9.208-9.079Z"
			transform="translate(6175 463.853)"
			fill="url(#d)"
		/>
		<path
			d="m-2584.628 1963.645 8.827 8.847 215.182.025 9.208-9.079Z"
			transform="translate(2781 463.853)"
			fill="url(#d)"
		/>
		<path
			d="m3821.148 2428.292-228.368.2 6.833 6.849 214.357.025 7.177-7.077m2.441-1-9.208 9.079-215.182-.025-8.827-8.847ZM427.148 2428.292l-228.368.2 6.833 6.849 214.357.025 7.177-7.077m2.441-1-9.208 9.079-215.182-.025-8.827-8.847Z"
			fill="#969998"
		/>
		<path
			d="M0 0h4017v66a71 71 0 0 1-71 71H71A71 71 0 0 1 0 66Z"
			transform="translate(0 2291)"
			fill="url(#f)"
		/>
		<path
			d="M0 0h4017v66a71 71 0 0 1-71 71H71A71 71 0 0 1 0 66Z"
			transform="translate(0 2291)"
			fill="url(#a)"
		/>
		<path
			d="M32.23 2416.49c-.5-.328-.995-.659-1.488-1h3955.515c-.493.34-.986.671-1.487 1Z"
			fill="#9e9fa1"
		/>
		<path
			d="M0 0h4017v66a71 71 0 0 1-71 71H71A71 71 0 0 1 0 66Z"
			transform="translate(0 2291)"
			fill="url(#g)"
		/>
		<path
			d="M0 0h619a43 43 0 0 1-43 43H43A43 43 0 0 1 0 0Z"
			transform="translate(1701 2291)"
			fill="url(#h)"
		/>
		<path d="M2010.5 53a12.5 12.5 0 1 1-12.5 12.5 12.5 12.5 0 0 1 12.5-12.5Z" />
		<path
			d="M4.5 0A4.5 4.5 0 1 1 0 4.5 4.5 4.5 0 0 1 4.5 0Z"
			transform="translate(2006 61)"
			fill="url(#i)"
		/>
		<g filter="url(#j)">
			<path d="M2052 60a5 5 0 1 1-5 5 5 5 0 0 1 5-5Z" fill="#00d30b" />
		</g>
	</svg>
)

export default SvgComponent
