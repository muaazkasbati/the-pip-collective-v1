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
            className="pt-12 pb-10 sm:mt-0 mt-10 border-white/5 sm:border-t overflow-hidden"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-6 space-y-4 self-end">
                        <div className="flex items-center">
                            <img src="/images/logo.png" alt="ThePipCollective Logo" className="w-40 sm:w-48" />
                        </div>
                        <p className="text-[17px] sm:text-[19px] text-white">
                            Quant-Inspired Trading. Trusted By Traders <br />
                            <b>Worldwide.</b>
                        </p>
                    </div>

                    <div className="lg:col-span-2 space-y-3">
                        {solutions?.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-2 text-[16px] text-white hover:text-purple-400"
                            >
                                {item.label}
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                    <div className="lg:col-span-2 space-y-3">
                        {social?.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="flex items-center gap-2 text-[16px] text-white hover:text-purple-400"
                            >
                                {item.label}
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
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

                    <div className="space-y-2 text-white">
                        <p className="text-[16px]">support@nexaai.com</p>
                        <p className="text-[16px]">+91876543210</p>
                    </div>
                </div>

                <div className="flex flex-col border-t border-white/5 pt-4 sm:flex-row justify-between items-center mt-12 gap-4 text-center">
                    <p className="text-[15px] text-[#898989]">
                        &copy; 2025 All Rights Reserved by NexAI
                    </p>

                    <div className="text-[15px] text-[#898989] space-x-2">
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
