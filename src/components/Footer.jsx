import Link from "next/link";

const solutions = [
    { label: "Solutions", href: "#Solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
]
const social = [
    { label: "Instagram", href: "#Instagram" },
    { label: "YouTube", href: "#youtube" },
    { label: "Twitter", href: "#twitter" },
    { label: "LinkedIn", href: "#linkedin" },
]

import { motion } from "framer-motion";
import { fadeUp } from "./SubscriptionSection";

export default function Footer() {
    return (
        <motion.footer
            className="sm:pt-12 pt-4 sm:pb-10 pb-4 sm:mt-0 mt-10 border-white/5 border-t overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-12 sm:gap-8 gap-2">
                    <div className="sm:col-span-6 col-span-5 space-y-4 self-end">
                        <div className="flex items-center">
                            <img src="/images/pip-logo.svg" alt="ThePipCollective Logo" className="w-[50px] sm:w-48" />
                        </div>
                        <p className="text-[8px] sm:text-[19px] text-white">
                            Quant-Inspired Trading. Trusted By Traders <br />
                            {/* <b>Worldwide.</b> */}
                        </p>
                    </div>

                    <div className="sm:col-span-2 col-span-2 sm:space-y-3 space-y-0.5">
                        {solutions?.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-2 text-[8px] sm:text-[16px] text-white hover:text-purple-400"
                            >
                                {item.label}
                                <svg className="sm:h-[9px] h-[4px] w-auto" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.977051 8.04512L8.11495 0.907227M8.11495 0.907227H2.76152M8.11495 0.907227V6.26065"
                                        stroke="#FCF5FE"
                                        strokeWidth="1.42758"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div className="sm:col-span-2 col-span-2 sm:space-y-3 space-y-0.5">
                        {social?.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-2 text-[8px] sm:text-[16px] text-white hover:text-purple-400"
                            >
                                {item.label}
                                <svg className="sm:h-[9px] h-[4px] w-auto" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.977051 8.04512L8.11495 0.907227M8.11495 0.907227H2.76152M8.11495 0.907227V6.26065"
                                        stroke="#FCF5FE"
                                        strokeWidth="1.42758"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div className="sm:col-span-2 col-span-3 space-y-2 text-white">
                        <p className="sm:text-[16px] text-[8px]">support@nexaai.com</p>
                        <p className="sm:text-[16px] text-[8px]">+91876543210</p>
                    </div>
                </div>

                <div className="flex border-t border-white/5 sm:pt-4 pt-2 flex-row justify-between items-center sm:mt-12 mt-4 gap-4 text-center">
                    <p className="sm:text-[15px] text-[8px] text-[#898989]">
                        &copy; 2025 All Rights Reserved by NexAI
                    </p>

                    <div className="sm:text-[15px] text-[8px] text-[#898989] space-x-2">
                        <a href="#terms" className="hover:text-purple-400">
                            Terms of Service
                        </a>
                        <span>|</span>
                        <a href="#privacy" className="hover:text-purple-400">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
