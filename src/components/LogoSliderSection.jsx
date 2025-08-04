import React from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


export default function LogoSliderSection() {
    const links = ["/images/logo-1-img.png", "/images/logo-3-img.png", "/images/logo-4-img.png", "/images/logo-5-img.png"];
    return (
        <>
            <section className="pb-16 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white relative"
                >
                    <div className="relative z-10 text-center">
                        <h3 className="text-xl md:text-[40px] mb-12 pb-6 relative inline-block mx-auto">
                            Join us for FREE and earn $200
                            {/* <span className="absolute bottom-0 left-32">
                                <svg width="170" height="24" viewBox="0 0 170 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6272 10.8234C11.6272 10.8234 33.5698 12.342 55.5799 11.8147C56.4563 11.8147 56.5538 12.8607 55.2429 12.9326C32.3676 14.1872 1.42548 13.983 1.00974 11.8147C0.537857 11.6882 0.268206 10.0852 1.14457 9.87419C55.9845 0.994412 167.383 -2.73893 169.338 5.7823C172.001 13.1224 87.9041 16.7502 35.963 23.563C28.1094 24.4067 29.5967 22.1108 35.4237 21.1796C67.1634 16.1075 155.215 10.6124 164.417 5.61355C144.463 1.31073 84.4698 3.19165 11.6272 10.8234Z" fill="#A200F5" />
                                </svg>
                            </span> */}
                        </h3>
                        <div className="relative">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                loop={true}
                                speed={2000} // long duration for smoothness
                                autoplay={{
                                    delay: 0, // very small delay
                                    disableOnInteraction: false,
                                }}
                                allowTouchMove={false} // optional: disable manual swiping
                                className="pb-12"
                            >

                                {links.map((data, i) => (
                                    <SwiperSlide key={i}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.2 }}
                                            className='flex justify-center items-center'
                                        >
                                            <img src={data} alt="" />
                                        </motion.div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
                            <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}
