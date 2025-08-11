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
      <section ref={sectionRef} className="md:pt-42 pt-20 relative overflow-hidden first-section">
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
              className="text-[26px] sm:text-[36px] lg:text-[70px] sm:leading-15 font-medium sm:mb-4"
            >
              Trade Like a Hedge Fund
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[16px] sm:text-3xl md:text-[45px] leading-snug font-light md:mb-6 sm:mb-4 mb-1 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent"
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
              <Button link href="#" className='primaryBtn'>Unlock Free Lifetime Access</Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] sm:text-xl md:text-[32px] font-extralight sm:mb-8 sm:text-left text-center"
            >
              & Earn $200 just for joining us!
            </motion.p>
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
        <div className="relative pt-12 sm:pb-12 pb-4 mt-6 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4"
          >
            <h3 className="text-[24px] sm:text-xl md:text-[48px] font-semibold sm:pb-6 pb-2 sm:mb-4 mb-2 relative inline-block mx-auto">
              Trade Smarter. Not Harder.
              <span className="absolute bottom-0 sm:right-8 right-4">
                <svg className="sm:w-[170px] w-[80px] h-auto"  viewBox="0 0 170 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6272 10.8234C11.6272 10.8234 33.5698 12.342 55.5799 11.8147C56.4563 11.8147 56.5538 12.8607 55.2429 12.9326C32.3676 14.1872 1.42548 13.983 1.00974 11.8147C0.537857 11.6882 0.268206 10.0852 1.14457 9.87419C55.9845 0.994412 167.383 -2.73893 169.338 5.7823C172.001 13.1224 87.9041 16.7502 35.963 23.563C28.1094 24.4067 29.5967 22.1108 35.4237 21.1796C67.1634 16.1075 155.215 10.6124 164.417 5.61355C144.463 1.31073 84.4698 3.19165 11.6272 10.8234Z" fill="#fff" />
                </svg>
              </span>
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
            className="w-full object-cover absolute glowBgImg"
          >
            {/* <div className='w-full'>
              <img src="./images/banner-bg-3.png" alt="" className='w-full' />
            </div> */}
            <motion.div
              initial={{ opacity: 0, y: 100 }} // Start from bottom
              animate={{ opacity: 1, y: 0 }}   // Animate to original position
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <img src="./images/banner-bg-3.png" alt="" className="w-full" />
            </motion.div>
          </motion.div>
          {/* <motion.svg
            initial={{ filter: 'drop-shadow(0 -60px 20px #A200F5)', opacity: 0.3 }}
            animate={{ filter: 'drop-shadow(0 -30px 10px #A200F5)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0"
            viewBox="0 0 1440 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3754_9003)">
              <g filter="url(#filter0_d_3754_9003)">
                <ellipse cx="947.161" cy="346.67" rx="469.024" ry="145.592" transform="rotate(3.98847 947.161 346.67)" fill="#121212" />
              </g>
              <g filter="url(#filter1_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
              <g filter="url(#filter2_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_3754_9003" x="388.108" y="91.5498" width="1118.11" height="479.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-15.1757" />
                <feGaussianBlur stdDeviation="45.5271" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter1_d_3754_9003" x="-346.093" y="-39.8362" width="2131.24" height="1169.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="34.1453" />
                <feGaussianBlur stdDeviation="118.56" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0 0 0 0 0 0.960784 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter2_d_3754_9003" x="-122.726" y="152.231" width="1684.5" height="722.742" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.84544" />
                <feGaussianBlur stdDeviation="6.87649" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <clipPath id="clip0_3754_9003">
                <rect width="1440" height="352" fill="white" />
              </clipPath>
            </defs>
          </motion.svg> */}
          {/* <svg className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0" viewBox="0 0 1440 352" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3754_9003)">
              <g filter="url(#filter0_d_3754_9003)">
                <ellipse cx="947.161" cy="346.67" rx="469.024" ry="145.592" transform="rotate(3.98847 947.161 346.67)" fill="#121212" />
              </g>
              <g filter="url(#filter1_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
              <g filter="url(#filter2_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_3754_9003" x="388.108" y="91.5498" width="1118.11" height="479.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-15.1757" />
                <feGaussianBlur stdDeviation="45.5271" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter1_d_3754_9003" x="-346.093" y="-39.8362" width="2131.24" height="1169.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="34.1453" />
                <feGaussianBlur stdDeviation="118.56" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0 0 0 0 0 0.960784 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter2_d_3754_9003" x="-122.726" y="152.231" width="1684.5" height="722.742" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.84544" />
                <feGaussianBlur stdDeviation="6.87649" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <clipPath id="clip0_3754_9003">
                <rect width="1440" height="352" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </div>
      </section>
    </>
  );
}


// bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text