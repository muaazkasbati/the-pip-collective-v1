import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./elements/Button";
import { useEffect, useRef, useState } from "react";

export default function FourthSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromRightSkewed = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  // const circleAnimation = {
  //   hidden: { strokeDashoffset: 100 },
  //   visible: { strokeDashoffset: 25 },
  // };

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // const [percentage, setPercentage] = useState(0);
  // const { ref: circleRef, inView: circleInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.3,
  // });
  // useEffect(() => {
  //   if (!circleInView) return;

  //   let current = 0;
  //   const target = 75;
  //   const interval = setInterval(() => {
  //     current += 1;
  //     if (current > target) {
  //       clearInterval(interval);
  //     } else {
  //       setPercentage(current);
  //     }
  //   }, 15); // adjust for speed

  //   return () => clearInterval(interval);
  // }, [circleInView]);

  const [percentage, setPercentage] = useState(0);
  const controls = useAnimation();
  const { ref: circleRef, inView: circleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!circleInView || animationStarted.current) return;

    animationStarted.current = true;
    controls.start("visible");

    let current = 0;
    const target = 75;
    const interval = setInterval(() => {
      current += 1;
      if (current > target) {
        clearInterval(interval);
      } else {
        setPercentage(current);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [circleInView, controls]);

  const circleAnimation = {
    hidden: { strokeDashoffset: 100 },
    visible: { strokeDashoffset: 25 },
  };

  return (
    <section
      ref={ref}
      id="expectations"
      className="relative overflow-hidden"
    >
      <div className="py-16 px-4 max-w-6xl mx-auto md:overflow-visible overflow-hidden">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-[60px] font-bold xl:text-start text-center"
        >
          Logic In - Trade Out
        </motion.h2>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl xl:text-start text-center md:text-[40px] bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent"
        >
          Trade Smarter
        </motion.h2>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center relative"
        >
          <div className="flex justify-center relative z-10">
            <img
              src="/images/gif.gif"
              alt="Mobile Trading Screen"
              className="xl:w-[80%] sm:w-[40%] w-full max-w-sm md:max-w-full"
            />
          </div>

          <div className="text-center md:text-left relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 grid grid-cols-2 xl:grid-cols-1 xl:gap-0 sm:gap-4 gap-1 relative"
            >
              {[0, 1].map((index) => (
                <motion.div
                  key={index}
                  variants={fadeInFromRightSkewed}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div
                    className=" bg-[#121212] sm:p-4 p-2 sm:rounded-[15px] rounded-[5px]"
                    style={{ border: "1px solid #292929" }}
                  >
                    <div className="text-left">
                      <h4 className="text-[12px] sm:text-[20px] md:text-[24px] font-bold bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">
                        {index === 0
                          ? "Smart Entries. Real Edge."
                          : "Verified Results. No Hype."}
                      </h4>
                      <p className="text-[10px] sm:text-[14px] md:text-[18px] font-light">
                        {index === 0
                          ? "No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time."
                          : "Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance."}
                      </p>
                    </div>
                  </div>

                  {/* <div
                    className={`flex flex-row items-center sm:items-start bg-[#121212] p-4 rounded-[15px]`}
                    style={{ border: "1px solid #292929" }}
                  >
                    <div className="">
                      <h4 className="text-[20px] md:text-[24px] font-bold bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">
                        {index === 0
                          ? "Smart Entries. Real Edge."
                          : "Verified Results. No Hype."}
                      </h4>
                      <p className="text-[14px] md:text-[18px] font-light">
                        {index === 0
                          ? "No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time."
                          : "Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance."}
                      </p>
                    </div>
                  </div> */}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 sm:mb-12 mb-4"
            >
              <div className="flex flex-row justify-center xl:items-center xl:gap-16 sm:max-w-full max-w-[200px] sm:text-center text-left mx-auto">
                <div className="text-left">
                  <h3 className="text-[12px] sm:text-[28px] xl:text-[30px] text-white mb-0">
                    Average Win Rate Using <br className="hidden sm:block" /> The
                    PipCollector
                  </h3>
                  <h4 className="text-[8px] sm:text-[20px] md:text-[26px] bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent mb-6">
                    Powered By PipCore
                  </h4>
                </div>

                <div className="flex justify-center md:justify-start">
                  <div ref={circleRef} className="relative w-12 sm:w-24 h-12 sm:h-24 md:w-32 md:h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#A200F5"
                        strokeWidth="4"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        variants={circleAnimation}
                        initial="hidden"
                        animate={controls}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        transform="rotate(-90 18 18)"
                      />
                      <text
                        x="18"
                        y="21"
                        textAnchor="middle"
                        fill="white"
                        fontSize="8"
                      >
                        {percentage}%
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex justify-center"
            >
              <Button link href="#pricing" className="primaryBtn">Unlock Free Lifetime Access</Button>
            </motion.div>
          </div>

        </motion.div>
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/images/login-trade-bg-1.png"
          alt=""
        />
      </div>
      <div className="absolute top-120 left-0">
        <img
          src="/images/login-trade-bg-2.png"
          alt=""
        />
      </div>
    </section>
  );
}
