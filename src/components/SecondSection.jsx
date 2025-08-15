const strategies = [
    {
        title: "MARTINGALE",
        description:
            "Reckless compounding with no exit plan. No strategy - just hope, until the account blows in one market move.",
    },
    {
        title: "GRID SYSTEMS",
        description:
            "Stacking trades with no risk control. Looks clever until the account blows in one market move.",
    },
    {
        title: "BLIND RE-ENTRIES",
        description:
            "Same setup. Same Trade. No logic. No adaptation to real market conditions.",
    },
    {
        title: "OVERFITTED INDICATORS",
        description:
            "Random signal triggers, overfitted to past data. They fall apart when it’s real.",
    },
];

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SecondSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });


    return (
        <section id="why-us" className="sm:pt-16 pt-4 sm:pb-10 pb-4 px-4 relative" >
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                {/* <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="px-4 py-2 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[16px] sm:text-[18px] inline-block"
                >
                    Why Most EAs Fail
                </motion.span> */}

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="sm:mb-8 mb-0"
                >
                    <span className="text-[24px] sm:text-3xl md:text-[60px] font-bold text-white mb-8">Most EAs Blow Accounts.</span>
                    <br />
                    <span className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-[30px]">Here’s Why</span>
                </motion.h2>

                <motion.div className="relative">
                    <div className="flex flex-col lg:flex-row items-center gap-6 md:mb-0 relative z-10">
                        {/* Left Side (Arrow image) */}
                        <div className="lg:w-2/5 w-full flex justify-center">
                            <motion.img
                                src="/images/arrow-img.png"
                                alt=""
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 0.5, x: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="lg:hidden sm:block hidden z-10 md:w-150 w-70"
                            />
                        </div>

                        {/* Right Side (Boxes grid) */}
                        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-6 sm:gap-4">
                            {strategies.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="sm:bg-[#191919] bg-white/5 text-center rounded-lg px-2 sm:px-6 py-3 sm:py-5 shadow-md text-white backdrop-blur-xs"
                                >
                                    <img src="/images/R-Close Square.png" alt="" className="mb-3 mx-auto w-[23px] sm:w-[75px] h-auto" />
                                    <h3 className="text-[12px] sm:text-[24px] uppercase font-bold mb-1">{item.title}</h3>
                                    <p className="text-white text-[10px] leading-tight sm:text-[20px]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <motion.img
                        src="/images/arrow-img.png"
                        alt=""
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="sm:hidden block absolute top-5 inset-0 z-0 w-[170px] -left-16 mx-auto"
                    />

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-0">
                        {strategies.map((item, idx) => (
                            <motion.div
                                key={idx}
                                // variants={itemVariants}
                                initial={{ opacity: 0, y: -40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
                                className={`bg-[#191919] py-6 rounded-lg  px-4`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-center">
                                        <img src="./images/R-Close Square.png" className='mx-auto mb-3' alt="" />
                                        <h3 className="text-[16px] sm:text-[18px] font-bold mb-1">{item.title}</h3>
                                        <p className="text-[#898989] text-[14px] sm:text-[16px]">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div> */}

                    {/* Gradient edges */}
                    {/* <div className="hidden md:block h-full w-[120px] absolute left-0 top-0 bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
                    <div className="hidden md:block h-full w-[120px] absolute right-0 top-0 bg-gradient-to-l from-[#121212] to-transparent z-10"></div> */}

                </motion.div>
            </motion.div>
            <motion.img
                src="/images/arrow-img.png"
                alt=""
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute lg:block hidden md:-bottom-24 sm:bottom-55 bottom-150 md:left-0 sm:left-30 z-10 md:w-150 w-70"
            />
            <motion.img
                src="/images/most-ease-bg-2.png"
                alt=""
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.5, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute sm:-bottom-16 -bottom-4 right-0 z-10 w-full"
            />
        </section>
    );
}
