import * as React from 'react'
import { SVGProps } from 'react'

type Props<T> = {
	imageUrl: string
} & SVGProps<T>

export const widthToHeightRatio = 1253 / 2074

const Iphone13ProGraphite = ({ imageUrl = 'iphone-13-pro-graphite-image2.png', ...props }: Props<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		width={1253}
		height={2074}
		viewBox="0 0 1253 2074"
		{...props}
	>
		<defs>
			<linearGradient
				id="a"
				y1={0.5}
				x2={0.37}
				y2={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#dfdbd5" />
				<stop offset={1} stopColor="#292829" />
			</linearGradient>
			<linearGradient
				id="c"
				x1={1}
				y1={0.55}
				x2={0.675}
				y2={0.55}
				xlinkHref="#a"
			/>
			<linearGradient
				id="d"
				y1={0.5}
				x2={1.083}
				y2={0.5}
				gradientUnits="objectBoundingBox"
			>
				<stop offset={0} stopColor="#084f42" />
				<stop offset={0.488} stopColor="#080311" />
				<stop offset={1} stopColor="#1246b3" />
			</linearGradient>
			<pattern
				id="b"
				width={1}
				height={1}
				patternTransform="matrix(1 0 0 -1 0 202)"
				viewBox="0 0 1253 101"
			>
				<image
					preserveAspectRatio="none"
					width={1253}
					height={101}
					xlinkHref="iphone-13-pro-graphite-image.png"
				/>
			</pattern>
			<pattern
				id="iphone-image-url"
				preserveAspectRatio="xMidYMid slice"
				width="100%"
				height="100%"
				viewBox="0 0 1170 2532"
			>
				<image
					width={1170}
					height={2532}
					xlinkHref={imageUrl}
				/>
			</pattern>
			<clipPath id="e">
				<path d="M425 19h144a6.018 6.018 0 0 1 6 6 6.018 6.018 0 0 1-6 6H425a6.018 6.018 0 0 1-6-6 6.018 6.018 0 0 1 6-6Z" />
			</clipPath>
		</defs>
		<g transform="translate(-3770.5 -561)">
			{/* <path
				transform="translate(3770.5 2534)"
				opacity={0.455}
				fill="url(#b)"
				d="M0 0h1253v101H0z"
			/> */}
			<path
				d="M3 408h14a2.946 2.946 0 0 1 3 3v69a2.946 2.946 0 0 1-3 3H3a2.946 2.946 0 0 1-3-3v-69a2.946 2.946 0 0 1 3-3Z"
				transform="translate(3894.5 561)"
				fill="url(#a)"
			/>
			<path
				d="M3911.5 1044h-14a2.946 2.946 0 0 1-3-3v-69a2.946 2.946 0 0 1 3-3h14a2.946 2.946 0 0 1 3 3v69a2.946 2.946 0 0 1-3 3Zm-14-74a2.006 2.006 0 0 0-2 2v69a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-69a2.006 2.006 0 0 0-2-2Z"
				fill="#3a3a3a"
			/>
			<path
				d="M5 553h14a2.946 2.946 0 0 1 3 3v147a2.946 2.946 0 0 1-3 3H5a2.946 2.946 0 0 1-3-3V556a2.946 2.946 0 0 1 3-3Z"
				transform="translate(3894.5 561)"
				fill="url(#a)"
			/>
			<path
				d="M3913.5 1267h-14a2.946 2.946 0 0 1-3-3v-147a2.946 2.946 0 0 1 3-3h14a2.946 2.946 0 0 1 3 3v147a2.946 2.946 0 0 1-3 3Zm-14-152a2.006 2.006 0 0 0-2 2v147a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-147a2.006 2.006 0 0 0-2-2Z"
				fill="#3a3a3a"
			/>
			<path
				d="M987 605h14a2.946 2.946 0 0 1 3 3v235a2.946 2.946 0 0 1-3 3h-14a2.946 2.946 0 0 1-3-3V608a2.946 2.946 0 0 1 3-3Z"
				transform="translate(3894.5 561)"
				fill="url(#c)"
			/>
			<path
				d="M4895.5 1407h-14a2.946 2.946 0 0 1-3-3v-235a2.946 2.946 0 0 1 3-3h14a2.946 2.946 0 0 1 3 3v235a2.946 2.946 0 0 1-3 3Zm-14-240a2.006 2.006 0 0 0-2 2v235a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-235a2.006 2.006 0 0 0-2-2Z"
				fill="#3a3a3a"
			/>
			<path
				d="M5 746h14a2.946 2.946 0 0 1 3 3v147a2.946 2.946 0 0 1-3 3H5a2.946 2.946 0 0 1-3-3V749a2.946 2.946 0 0 1 3-3Z"
				transform="translate(3894.5 561)"
				fill="url(#a)"
			/>
			<path
				d="M3913.5 1460h-14a2.946 2.946 0 0 1-3-3v-147a2.946 2.946 0 0 1 3-3h14a2.946 2.946 0 0 1 3 3v147a2.946 2.946 0 0 1-3 3Zm-14-152a2.006 2.006 0 0 0-2 2v147a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-147a2.006 2.006 0 0 0-2-2Z"
				fill="#3a3a3a"
			/>
			<path
				d="M4054.5 561h685a152.061 152.061 0 0 1 152 152v1723a152.061 152.061 0 0 1-152 152h-685a152.061 152.061 0 0 1-152-152V713a152.061 152.061 0 0 1 152-152Z"
				fill="#292829"
			/>
			<path
				d="M4739.5 2588h-685c-83.8 0-152-68.2-152-152V713c0-83.8 68.2-152 152-152h685c83.8 0 152 68.2 152 152v1723c0 83.8-68.2 152-152 152Zm-685-2026c-83.3 0-151 67.7-151 151v1723c0 83.3 67.7 151 151 151h685c83.3 0 151-67.7 151-151V713c0-83.3-67.7-151-151-151Z"
				fill="#3a3a3a"
			/>
			<path
				d="M4058.5 565h678a152.061 152.061 0 0 1 152 152v1716a152.061 152.061 0 0 1-152 152h-678a152.061 152.061 0 0 1-152-152V717a152.061 152.061 0 0 1 152-152Z"
				fill="none"
			/>
			<path
				d="M4736.5 2585h-678c-83.8 0-152-68.2-152-152V717c0-83.8 68.2-152 152-152h678c83.8 0 152 68.2 152 152v1716c0 83.8-68.2 152-152 152Zm-678-2016c-81.6 0-148 66.4-148 148v1716c0 81.6 66.4 148 148 148h678c81.6 0 148-66.4 148-148V717c0-81.6-66.4-148-148-148Z"
				fill="#dfdbd5"
			/>
			<path d="M4733.5 2572.5h-673a144.779 144.779 0 0 1-28.7-2.9 142.651 142.651 0 0 1-50.9-21.4 152.406 152.406 0 0 1-21.1-17.4 142.047 142.047 0 0 1-30.5-45.3 147.41 147.41 0 0 1-8.3-26.7 145.54 145.54 0 0 1-2.9-28.7V720a144.781 144.781 0 0 1 2.9-28.7 142.65 142.65 0 0 1 21.4-50.9 152.409 152.409 0 0 1 17.4-21.1 142.047 142.047 0 0 1 45.3-30.5 147.411 147.411 0 0 1 26.7-8.3 145.54 145.54 0 0 1 28.7-2.9h673a144.781 144.781 0 0 1 28.7 2.9 142.65 142.65 0 0 1 50.9 21.4 152.409 152.409 0 0 1 21.1 17.4 135.587 135.587 0 0 1 17.4 21.1 141.516 141.516 0 0 1 13.1 24.2 147.41 147.41 0 0 1 8.3 26.7 145.538 145.538 0 0 1 2.9 28.7v1710a144.778 144.778 0 0 1-2.9 28.7 142.649 142.649 0 0 1-21.4 50.9 152.406 152.406 0 0 1-17.4 21.1 142.045 142.045 0 0 1-45.3 30.5 147.413 147.413 0 0 1-26.7 8.3 137.754 137.754 0 0 1-28.7 3Z" />
			<path
				d="M4060.5 578a143.783 143.783 0 0 0-28.6 2.9 139.907 139.907 0 0 0-26.7 8.3 147.856 147.856 0 0 0-24.1 13.1 145.236 145.236 0 0 0-21 17.3 138.967 138.967 0 0 0-17.3 21 147.857 147.857 0 0 0-13.1 24.1 141.765 141.765 0 0 0-11.2 55.3v1710a143.783 143.783 0 0 0 2.9 28.6 139.906 139.906 0 0 0 8.3 26.7 147.854 147.854 0 0 0 13.1 24.1 145.238 145.238 0 0 0 17.3 21 138.966 138.966 0 0 0 21 17.3 147.856 147.856 0 0 0 24.1 13.1 141.765 141.765 0 0 0 55.3 11.2h673a143.781 143.781 0 0 0 28.6-2.9 139.905 139.905 0 0 0 26.7-8.3 147.854 147.854 0 0 0 24.1-13.1 145.235 145.235 0 0 0 21-17.3 138.966 138.966 0 0 0 17.3-21 147.854 147.854 0 0 0 13.1-24.1 141.766 141.766 0 0 0 11.2-55.3V720a143.782 143.782 0 0 0-2.9-28.6 139.908 139.908 0 0 0-8.3-26.7 147.856 147.856 0 0 0-13.1-24.1 145.237 145.237 0 0 0-17.3-21 138.968 138.968 0 0 0-21-17.3 147.857 147.857 0 0 0-24.1-13.1 141.765 141.765 0 0 0-55.3-11.2h-673m0-1h673a142.97 142.97 0 0 1 143 143v1710a142.97 142.97 0 0 1-143 143h-673a142.97 142.97 0 0 1-143-143V720a142.97 142.97 0 0 1 143-143Z"
				fill="#313131"
			/>
			<circle
				cx={18.5}
				cy={18.5}
				r={18.5}
				transform="translate(4241.5 617)"
				fill="#141414"
			/>
			<circle
				cx={9.5}
				cy={9.5}
				r={9.5}
				transform="translate(4250.5 626)"
				fill="url(#d)"
			/>
			<path
				d="M4309.5 577h164v10a10.029 10.029 0 0 1-10 10h-144a10.029 10.029 0 0 1-10-10v-10Z"
				fill="none"
			/>
			<path
				d="M4463.5 597h-144a10.029 10.029 0 0 1-10-10v-9a.945.945 0 0 1 1-1h162a.945.945 0 0 1 1 1v9a10.029 10.029 0 0 1-10 10Zm-153-19v9a8.963 8.963 0 0 0 9 9h144a8.963 8.963 0 0 0 9-9v-9Zm0-.5v.5Z"
				fill="#313131"
			/>
			<path
				d="M4319.5 580h144a6.018 6.018 0 0 1 6 6 6.018 6.018 0 0 1-6 6h-144a6.018 6.018 0 0 1-6-6 6.018 6.018 0 0 1 6-6Z"
				fill="none"
			/>
			<path
				d="M4463.5 592h-144a6 6 0 0 1 0-12h144a6 6 0 0 1 0 12Zm-144-11a5 5 0 0 0 0 10h144a5 5 0 0 0 0-10Z"
				fill="#313131"
			/>
			<g transform="translate(3894.5 561)" clipPath="url(#e)">
				<path
					d="M577 33v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h2v1h1v2h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h2v1h1v2h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h-1v-2h-2v-1h2v1h1v2h2v1h1v2Zm-3 0v-2h-2v-1h2v1h1v2Zm158-2h-1v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1h1v2h2v1Zm0-3h-1v-1h-1v-2h-2v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1h1v2h2v1Zm0-3h-1v-1h-1v-2h-2v-1h-1v-2h1v2h2v1h1v2h2v1Zm0-3h-1v-1h-1v-2h1v2h2v1Z"
					fill="#313131"
				/>
			</g>
			<path
				fill="#474644"
				d="M4680.5 562h15v15h-15zM3903.5 766h14v13h-14zM3903.5 2367h14v13h-14zM4876.5 2369h14v13h-14zM4104.5 2573h13v14h-13zM4876.5 766h14v13h-14z"
			/>
			<path
				d="M841 1979H164a106.791 106.791 0 0 1-21.8-2.2 108.731 108.731 0 0 1-38.6-16.2 107.3 107.3 0 0 1-39.1-47.5 101.668 101.668 0 0 1-6.3-20.3A106.791 106.791 0 0 1 56 1871V156a106.791 106.791 0 0 1 2.2-21.8 108.729 108.729 0 0 1 16.2-38.6 107.3 107.3 0 0 1 47.5-39.1 101.668 101.668 0 0 1 20.3-6.3A106.791 106.791 0 0 1 164 48h142.5a10.029 10.029 0 0 1 10 10v13a53.006 53.006 0 0 0 52.9 53h265.1a54 54 0 0 0 49.8-33 52.181 52.181 0 0 0 4.2-21V58a10.029 10.029 0 0 1 10-10H841a106.791 106.791 0 0 1 21.8 2.2 108.728 108.728 0 0 1 38.6 16.2 107.3 107.3 0 0 1 39.1 47.5 101.666 101.666 0 0 1 6.3 20.3A106.791 106.791 0 0 1 949 156v1715a106.792 106.792 0 0 1-2.2 21.8 108.728 108.728 0 0 1-16.2 38.6 107.3 107.3 0 0 1-47.5 39.1 101.666 101.666 0 0 1-20.3 6.3 106.79 106.79 0 0 1-21.8 2.2Z"
				transform="translate(3894.5 561)"
				fill="url(#iphone-image-url)"
			/>
		</g>
	</svg>
)

export default Iphone13ProGraphite
