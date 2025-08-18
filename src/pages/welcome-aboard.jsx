import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import Head from "next/head";
import { useState } from "react";
import { motion } from 'framer-motion';
import Button from "@/components/elements/Button";
import { FooterAbroad } from "@/components/FooterAbroad";
import CallToActionSection from "@/components/CallToActionSection";

export default function WelcomAbroad() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className="welcomeAbroad">
            <Head>
                <title>ThePipCollective</title>
            </Head>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-4 absolute top-0 left-0 w-full z-20"
            >
                <div className="flex items-center justify-between text-white container max-w-7xl mx-auto">
                    <motion.img
                        src="/images/pip-logo.svg"
                        alt="ThePipCollective Logo"
                        className="w-[130px] md:w-[187px]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

            </motion.header>
            <section className="sm:pt-36 pt-22 relative overflow-hidden ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-white relative container max-w-7xl mx-auto md:px-0 px-4 z-10"
                >
                    <div className="relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[24px] sm:text-[48px] md:text-[75px] leading-15 font-medium sm:mb-4"
                        >
                            Welcome Aboard!
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[16px] sm:text-[24px] md:text-[36px] leading-snug font-light mb-6 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent"
                        >
                            Check your inbox – we’ve just sent you everything you need to get started.
                        </motion.h2>

                    </div>
                </motion.div>
                {/* <div class="bg-[#1b1b1b] p-4 rounded-md">
                        <h3 class="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">Step 1:</h3>
                        <p class="mt-2 text-sm">
                            On The Welcome Page After Check Out, Choose<br />
                            Which Broker You Want To Join:<br />
                            <span class="font-semibold">Vantage Markets</span> Or <span class="font-semibold">PUPrime</span>.
                        </p>
                    </div> */}

                <motion.img
                    src="/images/Ellipse 454.png"
                    alt=""
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.5, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute top-0 left-0 z-10 lg:block hidden"
                />


            </section>
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
                                    {/* <img
                                        src="/images/play-button.png"
                                        alt="Play"
                                        className="absolute  z-10 left-0 right-0 mx-auto block top-1/3 w-[50px] md:w-[80px] cursor-pointer"
                                    /> */}
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
            <div className="max-w-7xl mx-auto px-8 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-2">
                    <div className="bg-[#1b1b1b] p-4 rounded-md ">
                        <h4 className="font-bold text-[13px] sm:text-[18px]">
                            <span className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">Step 1:</span>
                        </h4>
                        <p className="mt-2 text-[10px] sm:text-[16px] text-white">
                            Head to your email, click the link to the members dashboard and login using the credentials provided.
                        </p>
                    </div>

                    <div className="bg-[#1b1b1b] p-4 rounded-md">
                        <h4 className="font-bold text-[13px] sm:text-[18px]">
                            <span className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">Step 2:</span>
                        </h4>
                        <p className="mt-2 text-[10px] sm:text-[16px] text-white">
                            Click the button below to join our Discord Server, open a support ticket and our team will get you setup.
                        </p>
                    </div>
                </div>
            </div>
            <CallToActionSection /> 
            <Footer />
            {/* <div className="flex flex-row justify-between items-center gap-y-4 mb-5 mx-4 lg:mx-10 relative z-10 text-center">
                <div>
                    <img src="./images/pip-logo.svg" alt="Logo" className="sm:w-[204px] w-[80px]" />
                </div>
                <div>
                    <p className="text-[#898989] sm:text-[16px] text-[8px] mb-0">©2025 All Rights Reserved by NexaAIst</p>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row gap-1 sm:gap-6">
                        <p className="text-[#898989] sm:text-[16px] text-[8px] mb-0">Terms of Service</p>
                        <p className="text-[#898989] sm:text-[16px] text-[8px] mb-0">Privacy Policy</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}