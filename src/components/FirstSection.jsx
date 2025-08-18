import { useRef } from 'react';
import Button from './elements/Button';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

export default function FirstSection() {
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
      <section ref={sectionRef} className="md:pt-42 pt-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner-bg.png)' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white relative container max-w-7xl mx-auto md:px-0 px-4 z-10"
        >
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[26px] sm:text-[36px] lg:text-[75px] sm:leading-15 font-bold sm:mb-4"
            >
              Trade Like a Hedge Fund
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[16px] sm:text-3xl md:text-[45px] leading-none pb-2 font-light md:mb-6 sm:mb-4 mb-1 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_48%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent"
            >
              Powered by Proprietary Quant Logic
              – <br className='sm:block hidden' /> The Same Logic Hedge Funds Use
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] sm:text-[16px] md:text-[22px] font-light mb-8 md:leading-8"
              style={{ color: "#BABABA" }}
            >
              No martingale. No grid. No ridiculous drawdowns.

              No BS.
              <br className='sm:block hidden' />
              Just simple, automated trading – built for live accounts & prop firm success.
            </motion.p>

            <motion.div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              className="flex flex-col text-center mb-4 max-w-md w-full"
            >
              <Button link href="#pricing" className='primaryBtn'>Unlock Free Lifetime Access</Button>
            </motion.div>
          </div>
          <motion.img
            src="/images/planet.png"
            alt=""
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[300px] hidden  mx-auto"
          />
        </motion.div>

        <motion.img
          src="/images/mob-header-bg.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-0 left-0 z-0 sm:hidden block"
        />
        <motion.img
          src="/images/Ellipse 454.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-0 left-0 z-10 lg:block hidden"
        />
        <motion.img
          src="/images/Ellipse 455.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-0 right-0 z-10"
        />
        <motion.img
          src="/images/planet.png"
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-26 right-4 sm:right-9 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] block"
        />
        <div className="relative pt-12 sm:pb-12 pb-4 mt-12 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4"
          >
            <h3 className="text-[24px] sm:text-xl md:text-[48px] font-semibold sm:pb-0 pb-0 sm:mb-2 mb-2 relative inline-block mx-auto">
              Trade Smarter. Not Harder.
            </h3>
            <p className="text-[14px] sm:text-[18px] md:text-[24px] sm:mb-8 mb-0 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">
              One intelligent trade at a time.
              Not 10 over-leveraged guesses.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:flex hidden flex-col mb-4 max-w-md mx-auto w-full"
            >
              <Button className='italic cursor-pointer'>Before You Blow Another Account... <span className='underline bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent'>WATCH THIS!</span></Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ filter: 'drop-shadow(0 -60px 20px #A200F5)', opacity: 0.3 }}
            animate={{ filter: 'drop-shadow(rgb(162, 0, 245) 0px -8px 4px)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full object-cover absolute sm:-top-[60px] xs:-top-[20px] top-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <img src="./images/banner-bg-3.png" alt="" className="w-full" />
            </motion.div>
          </motion.div>
          
        </div>
      </section>
    </>
  );
}