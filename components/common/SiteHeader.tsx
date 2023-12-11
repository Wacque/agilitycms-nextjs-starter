"use client"

import React, {useEffect, useState} from "react"
import Link from "next/link"
import Image, {StaticImageData} from "next/image"
import {IHeaderData} from "lib/cms-content/getHeaderContent"
import {AgilityImage, handlePreview, ImageField} from "@agility/nextjs"
import LoadingWidget from "./LoadingWidget"


interface HeaderImage {
	label: string;
	url: string  | StaticImageData;
	target: string;
	filesize: number;
	height: number;
	width: number;
}

const SiteHeader = ({logo, siteName}: {
	logo: HeaderImage,
	siteName: string
}) => {
	return (
		<header className="relative w-full mx-auto bg-white px-8">
			<div className="max-w-screen-xl mx-auto">
				<div className="flex justify-between items-center py-6 md:justify-start md:space-x-10 w-full">
					<div className="md:w-0 md:flex-1">
						<Link href="/" className="flex items-center">
							<AgilityImage
								className="h-14 sm:h-12 w-auto"
								src={logo.url}
								alt={logo.label}
								width={logo.height}
								height={logo.width}
								fill={false}
							/>

							<p className="font-bold text-xl text-secondary-500 ml-3 mt-2">{siteName}</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader
