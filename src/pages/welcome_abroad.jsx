import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Head from "next/head";
import { useState } from "react";
import { motion } from 'framer-motion';
import Button from "@/components/elements/Button";
import { FooterAbroad } from "@/components/FooterAbroad";

export default function WelcomAbroad() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className="welcomeAbroad">
            <Head>
                <title>The Pip Collective</title>
            </Head>
            <Header />
            <Welcome />
            <section className="pb-2 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white relative container max-w-7xl mx-auto"
                >
                    <div className="relative z-10 text-center">
                        <div
                            className="w-full max-w-[1000px] h-[200px] sm:h-[350px] md:h-[550px] rounded-[20px] overflow-hidden relative mx-auto mb-8"
                            onClick={() => setIsPlaying(true)}
                        >
                            {isPlaying ? (
                                <iframe
                                    src="https://player.vimeo.com/video/1009486276?autoplay=1&title=0&byline=0&portrait=0"
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src="/images/video-thumbnail.jpg"
                                        alt="Video thumbnail"
                                        className="w-full h-full object-cover"
                                    />
                                    <img
                                        src="/images/play-button.png"
                                        alt="Play"
                                        className="absolute  z-10 left-0 right-0 mx-auto block top-1/3 w-[50px] md:w-[80px] cursor-pointer"
                                    />
                                    <div className="h-full w-[100px] md:w-[180px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
                                    <div className="h-full w-[100px] md:w-[180px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
                                    <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-[#121212] to-transparent"></div>
                                    <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-[#121212] from-transparent"></div>
                                </>
                            )}
                        </div>

                    </div>
                </motion.div>
            </section>
            <div className="flex justify-center px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#1b1b1b] p-4 rounded-md md:w-80 ">
                        <h3 className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">
                            Step 1:
                        </h3>
                        <p className="mt-2 text-sm text-white">
                            Head to your email and follow the link to access your account.  Within the email you’ll find logins to access thePipCollective Dashboard.
                        </p>
                    </div>

                    <div className="bg-[#1b1b1b] p-4 rounded-md md:w-80">
                        <h3 className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">
                            Step 2:
                        </h3>
                        <p className="mt-2 text-sm text-white">
                            Click the button below to join our Discord Server – this is where our team will personally guide you through the setup and answer any questions.
                        </p>
                    </div>
                </div>
            </div>
            <FooterAbroad />
            <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 mb-5 mx-4 lg:mx-10 relative z-10 text-center lg:text-left">
                <div>
                    <img src="./images/logo.png" alt="Logo" className="mx-auto lg:mx-0" />
                </div>

                <div>
                    <p className="text-[#898989] mb-0">©2025 All Rights Reserved by NexaAIst</p>
                </div>

                <div>
                    <div className="flex flex-col md:flex-row gap-2 lg:gap-6">
                        <p className="text-[#898989] mb-0">Terms of Service</p>
                        <p className="text-[#898989] mb-0">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}