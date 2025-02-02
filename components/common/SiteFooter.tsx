import Image from "next/image"
import React from "react"
import {FaXTwitter, FaInstagram, FaSlack, FaYoutube} from "react-icons/fa6"

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
    // set up Agility CMS Socials
    const socials = [
        {
            title: "X (Twitter)",
            url: "https://www.twitter.com/agilitycms",
            icon: <FaXTwitter
                className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"/>,
        },
        {
            title: "Instagram",
            url: "https://www.instagram.com/agilitycms",
            icon: <FaInstagram
                className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"/>,
        },
        {
            title: "Slack",
            url: "https://agilitycms.com/join-slack",
            icon: <FaSlack
                className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"/>,
        },
        {
            title: "YouTube",
            url: "https://www.youtube.com/@AgilityCMS",
            icon: <FaYoutube
                className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300"/>,
        },
    ]

    return (
        <footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
            <div className="max-w-screen-xl mx-auto md:flex md:items-center">
                {/*<div className="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">*/}
                {/*	<a href="https://www.agilitycms.com" target="_blank" rel="noreferrer" title="Agility CMS">*/}
                {/*		/!* We use the built-in nextjs Image component here since this is referencing an SVG *!/*/}
                {/*		<Image src="/assets/agility-logo.svg" alt="Agility CMS" width={90} height={24} />*/}
                {/*	</a>*/}
                {/*</div>*/}
                <div className="flex-grow mb-4 md:mb-0">
                    <p className="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl">
                        AI Email use and transfer of information received from Google APIs to any other app will adhere
                        to <a className={"text-gray-600 mr-2 border-b border-gray-600"} rel="noreferrer"
                              target={"_blank"}
                              href="https://developers.google.com/terms/api-services-user-data-policy">Google API
                        Services User Data Policy</a>, including the limited use requirements.You can also get more
                        details from our <a className={"text-gray-600 mr-2 border-b border-gray-600"} rel="noreferrer"
                                            target="_blank"
                                            href="https://aiemail.aihubclub.online/privacypolicy.html">Privacy
                        Policy</a>.
                    </p>
                </div>

                {/*<div className="flex-1-grow">*/}
                {/*	<ul className="flex justify-center md:justify-start">*/}
                {/*		{socials.map((social, index) => (*/}
                {/*			<li key={index} className="mx-4 md:mx-0">*/}
                {/*				<a href={social.url} title={`Follow Agility CMS on ${social.title}`} target="_blank" rel="noreferrer">*/}
                {/*					{social.icon}*/}
                {/*				</a>*/}
                {/*			</li>*/}
                {/*		))}*/}
                {/*	</ul>*/}
                {/*</div>*/}
            </div>
            <div className="max-w-screen-xl flex justify-end items-center mx-auto md:flex px-8 mt-6">
                <a className={"font-bold mr-2 text-primary-500 text-sm text-center md:text-left uppercase"} rel="noreferrer"
                   target="_blank"
                   href="https://aiemail.aihubclub.online/privacypolicy.html">Privacy
                    Policy</a>
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" fill="#6415FF" viewBox="0 0 14 10">
                    <path stroke="#6415FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
            </div>
        </footer>
    )
}

export default SiteFooter
