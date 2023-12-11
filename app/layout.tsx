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

export default async function RootLayout() {
	// const {locale, sitemap, isDevelopmentMode, isPreview} = useAgilityContext()

	// const header = await getHeaderContent({sitemap, locale})
	const googlePlayLink = "https://play.google.com/store/apps/details?id=ai.mail.inbox.gmail.outlook.manager"
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
										title: "Transform your email workflow with AI Email",
										content:  "AI Email: All-In-One Mail is the ultimate email tool for all your personal and professional communication needs! Powered by state-of-the-art AI technology, it enables you to manage emails more effectively, quickly and efficiently than ever before. AI Email allows you to manage multiple email accounts, streamline your inbox, automate responses, and customize your messages with templates and signatures with ease. Try it out today and AI Email: All-In-One Mail Tool has everything you need to stay organized and efficient.",
										tagline:  "Your personal AI email assistant",
										imagePosition: "right",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: googlePlayLink,
											text: "Find on Google play",
										},
										highPriority: ""
									}} />
									<TextBlockWithImage fields={{
										title: "Revolutionize your email experience",
										content:  "AI Email: All-In-One Mail Tool allows you to manage multiple email accounts all in one place. You can easily switch between accounts to access all your emails, attachments, and contacts, without ever leaving the platform.",
										tagline:  "Unified Email Management",
										imagePosition: "left",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: googlePlayLink,
											text: "Find on Google play",
										},
										highPriority: ""
									}} />
									<TextBlockWithImage fields={{
										title: "Stay organized and save time",
										content:  "Our AI-powered inbox helps filter out the noise and prioritize your most important emails. The tool automatically labels your emails and sorts them into categories to help save you time and keep your inbox clutter-free.",
										tagline:  "Smart Inbox",
										imagePosition: "right",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: googlePlayLink,
											text: "Find on Google play",
										},
										highPriority: ""
									}} />
									<TextBlockWithImage fields={{
										title: "Maximize your productivity",
										content:  "Our advanced AI technology empowers you to streamline your communication with advanced features. From scheduling emails, intelligent sorting and filtering, to automatically categorize email, automate email writing or replies, etc. AI Email helps you maximize your efficiency and stay organized all the time.",
										tagline:  "AI-powered efficiency ",
										imagePosition: "left",
										image: "https://cdn.aglty.io/blog-starter-2021-template/posts/gaddafi-rusli-2ueUnL4CkV8-unsplash 1.jpg?format=auto&w=600",
										primaryButton: {
											href: googlePlayLink,
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
