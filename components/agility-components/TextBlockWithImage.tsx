import React from "react"
import {AgilityPic, ImageField, Module, URLField} from "@agility/nextjs"
import Link from "next/link"
import Image, {StaticImageData} from "next/image"

interface ITextBlockWithImage {
	title: string
	content: string
	tagline?: string
	imagePosition: "left" | "right"
	image: string
	primaryButton: {
		text: string,
		href: string
	}
	highPriority?: string
}

const TextBlockWithImage = ({fields}: {fields: ITextBlockWithImage}) => {
	// get module fields

	// function to check whether or not the url is absolute
	const isUrlAbsolute = (url: string) => url.indexOf("://") > 0 || url.indexOf("//") === 0

	// function to generate proper link
	const generateLink = (url: string,  text: string) => {
		// if relative link, use next/link
		if (isUrlAbsolute(url) === false) {
			return (
				<Link
					href={url}
					title={text}
					target={"_blank"}
					className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
				>
					{text}
				</Link>
			)
		} else {
			// else use anchor tag
			return (
				<a
					rel="noreferrer"
					href={url}
					title={text}
					target={"_blank"}
					className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
				>
					{text}
				</a>
			)
		}
	}

	//determine if the image should be high priority
	// const priority = module.fields.highPriority === "true"

	return (
		<div className="relative px-8">
			<div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
				<div className="md:w-5/12 flex-shrink-0 relative ">
					<Link href={fields.primaryButton.href} className="relative">
						<AgilityPic
							image={
								{
									label: "image",
									url: fields.image,
									target: "",
									filesize: 2,
									height: 300,
									width: 300,
								}
							}
							className="rounded-lg object-cover object-center"
							priority={true}
							fallbackWidth={600}
							sources={[
								//screen at least than 640, it's 1/2 of the screen, so the same size as the prev breakpoint
								{media: "(min-width: 1280px)", width: 800},
								{media: "(min-width: 640px)", width: 640},
								//screen less than 640, full width of screen
								{media: "(max-width: 639px)", width: 640},
							]}
						/>
						{/*<Image width={undefined} height={undefined} alt={""} src={fields.image}/>*/}
					</Link>
				</div>
				<div
					className={`md:w-6/12 mt-16 md:mt-0 ${
						fields.imagePosition != "right" ? `md:ml-12 lg:ml-16 md:order-last` : `md:mr-12 lg:mr-16 md:order-first`
					}`}
				>
					<div className="g:py-8 text-center md:text-left">
						{fields.tagline && (
							<span className="font-bold text-primary-500 text-sm text-center md:text-left uppercase">
								{fields.tagline}
							</span>
						)}
						<h2 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
							{fields.title}
						</h2>
						<p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
							{fields.content}
						</p>
						{fields.primaryButton &&
							generateLink(fields.primaryButton.href, fields.primaryButton.text)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TextBlockWithImage
