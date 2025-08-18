import React, { useState } from 'react'
import { motion } from 'framer-motion';
import Button from './elements/Button';

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <>
            <section className="pb-2 px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white relative container max-w-7xl mx-auto"
                >
                    <div className="relative z-10 text-center">
                        {/* <div className="w-full max-w-[1000px] h-[200px] sm:h-[350px] md:h-[550px] rounded-[20px] overflow-hidden relative mx-auto mb-8">
                            <img src="/images/video-thumbnail.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
                            <img src="/images/play-button.png" alt="Play" className="absolute z-10 left-0 right-0 mx-auto block top-1/3 w-[50px] md:w-[80px]" />
                            <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-black to-transparent"></div>
                            <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-black from-transparent"></div>
                        </div> */}
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
                                        className="absolute  z-10 left-0 right-0 mx-auto sm:block hidden top-1/3 w-[50px] md:w-[80px] cursor-pointer"
                                    />
                                    {/* <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-black to-transparent"></div>
                                    <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-black from-transparent"></div> */}
                                    <div className="h-full w-[100px] md:w-[180px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
                                    <div className="h-full w-[100px] md:w-[180px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
                                    <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-[#121212] to-transparent"></div>
                                    <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-[#121212] from-transparent"></div>
                                </>
                            )}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col mb-4 max-w-md mx-auto w-full"
                        >
                            <Button link href="#pricing" className='primaryBtn'>Unlock Free Lifetime Access</Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
