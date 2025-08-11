const features = [
    {
        title: "Designed to Pass Challenges",
        description:
            "Built for prop firm success. Disciplined entries, tight drawdown control and logic that holds up under pressure.",
    },
    {
        title: "Built to Handle Real Accounts",
        description:
            "This EA doesn’t guess. It runs on proprietary quant logic—like the systems hedge funds use to scale real capital.",
    },
    {
        title: "Streamlined for Real Traders",
        description:
            "No 50+ settings to tweak... Just plug in and trade. The logic is pre-optimized for edge.",
    },
    {
        title: "Simple & Effective",
        description:
            "No fluff. No noise. Plug in. Trade smart. Simple to deploy. Ruthless in performance.",
    },
];

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './elements/Button';
import { useMemo } from 'react';
import FeatureCard from './FeatureCard';

export default function ThirdSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    // const imgControllers = useMemo(() => features.map(() => useAnimation()), []);

    return (
        <section id="copy-trade" className="sm:pt-16 pt-4 pb-0 relative overflow-hidden">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className=" text-center shadow-[inset_0_10px_10px_-10px_#ffffff44,_inset_0_-10px_10px_-10px_#ffffff44] pt-10 pb-12 px-4 sm:px-8 md:px-20 rounded-[0px] relative"
            >
                <div className='relative z-10'>
                    <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-2 sm:mb-5">
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 xl:w-1/2 xl:order-0 order-1">
                            <div
                                className="group relative overflow-hidden rounded-2xl bg-[#191919] p-3 sm:p-6 text-start "
                            >
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="">
                                        <img src="./images/eas-icon.png" className='mb-3 sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]' alt="" />
                                        <div className="">
                                            <h3 className="text-[12px] sm:text-lg font-bold mb-1 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">{`Built on Hedge Fund Logic`}</h3>
                                            <p className="text-[#fff] text-[10px] sm:text-base">{`This EA doesn’t guess. It runs on proprietary quant logic—like the systems hedge funds use to scale real capital.`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group relative overflow-hidden rounded-2xl bg-[#191919] p-3 sm:p-6 text-start "
                            >
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="">
                                        <img src="./images/eas-icon.png" className='mb-3 sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]' alt="" />
                                        <div className="">
                                            <h3 className="text-[12px] sm:text-lg font-bold mb-1 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">{`Smart, Controlled Risk`}</h3>
                                            <p className="text-[#fff] text-[10px] sm:text-base">{`No martingale. No chaos. Every move is disciplined and designed to protect capital—not gamble it.`}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='xl:w-1/2'>
                            <motion.h2
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl sm:text-[38px] md:text-[50px] md:leading-15 font-medium mb-2 text-center xl:text-right"
                            >
                                Why This PipCollector Actually Works
                            </motion.h2>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-2xl sm:text-3xl md:text-[30px] bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent xl:text-right text-center"
                            >
                                Built Different-Built On Quant Logic
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="text-white text-base sm:text-lg mb-8 xl:text-right text-center"
                            >
                                No grid. No martingale. No luck.
                            </motion.p>
                        </div>
                    </div>

                    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 w-full">
                        {features.map((item, idx) => (
                            <FeatureCard key={idx} item={item} idx={idx} inView={inView} />
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-white text-base sm:text-lg md:text-[20px] mt-8 mb-8"
                    >
                        It’s Not Another EA. It’s A System Built To Think And Trade... Like A Hedge Fund.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <Button className='primaryBtn cursor-pointer mb-16'>
                            Ready to Trade Smarter? Unlock It Now
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
            <div className='absolute bottom-0 right-0'>
                <img src="./images/building-img-1.png" alt="" />
            </div>
        </section>
    );
}
