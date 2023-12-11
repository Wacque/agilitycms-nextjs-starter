import LoadingWidget from "components/common/LoadingWidget"
import PreviewBar from "components/common/PreviewBar"
import SiteFooter from "components/common/SiteFooter"
import SiteHeader from "components/common/SiteHeader"
import {useAgilityContext} from "lib/cms-content/useAgilityContext"

import {Inter} from "next/font/google"

import "/styles/globals.css"
import "/styles/nprogress.min.css"
import {getHeaderContent} from "lib/cms-content/getHeaderContent"
import TextBlockWithImage from "../components/agility-components/TextBlockWithImage";
import {ImageField, URLField} from "@agility/nextjs";

// import Logo from "assets/logo.png"
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
	// const {locale, sitemap, isDevelopmentMode, isPreview} = useAgilityContext()

	// const header = await getHeaderContent({sitemap, locale})

	const isPreviewRequested = false

	return (
		<html lang="en" className={inter.className}>
			<body>
				<div id="site-wrapper">
					{isPreviewRequested && <LoadingWidget message="Loading Preview Mode" />}
					{!isPreviewRequested && (
						<div id="site">
							{/*<PreviewBar {...{isDevelopmentMode, isPreview}} />*/}
							<div className="flex flex-col min-h-screen">
								<SiteHeader logo={
									{
										url: "/logo.png",
										label: "logo",
										width: 100,
										height: 100,
										filesize: 1,
										target: "_blank"
									}
								} siteName={"Ai Email"}/>
								<main className={`flex-grow`}>
									<TextBlockWithImage fields={{
										title: "From short breaks to long adventures",
										content:  "Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!",
										tagline:  "tagline",
										imagePosition: "right",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: "https://www.google.com",
											text: "Find on Google play",
										},
										highPriority: ""
									}} />
									<TextBlockWithImage fields={{
										title: "From short breaks to long adventures",
										content:  "Travel blog featuring travel tips, guides, and photography from around the world. Whether you need guidance for your first trip, or you're a seasoned traveler looking for destination inspiration, you've come to the right place!",
										tagline:  "tagline",
										imagePosition: "left",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: "https://www.google.com",
											text: "Find on Google play",
										},
										highPriority: ""
									}} />
								</main>
								<SiteFooter />
							</div>
						</div>
					)}
				</div>
			</body>
		</html>
	)
}
