import { useRef } from 'react';
import Button from './elements/Button';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

export default function Welcome() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    // Animate the intensity of drop-shadow
    const shadowStrength = useTransform(scrollYProgress, [0, 1], [0, 20]);
    const shadowFilter = useTransform(
        scrollYProgress,
        [0, 1],
        ['drop-shadow(0 -30px 10px #A200F5)', 'drop-shadow(0 -60px 20px #A200F5)']
    );




    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    return (
        <>
            <section ref={sectionRef} className="pt-16 relative overflow-hidden ">
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
                            className="text-2xl md:text-[70px] leading-15 font-medium sm:mb-4"
                        >
                            Welcome Aboard!
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl sm:text-3xl md:text-[44px] leading-snug font-light mb-6 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent"
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
        </>
    );
}