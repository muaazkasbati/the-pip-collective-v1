import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const plansPaid = [
  {
    title: "Monthly Subscription PipCollector EA",
    price: "£49.99",
    priceTime: "Month",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "6 Month Subscription PipCollector EA",
    price: "£249.00",
    priceTime: "6 Months",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "Annual Subscription PipCollector EA",
    price: "£449.00",
    priceTime: "Year",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "Lifetime Access PipCollector EA",
    price: "£999.00",
    priceTime: "One-off Fee",
    features: [
      "5 Account Licenses",
      "Step - by - Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Setfile Finder",
      "Ready to trade setfiles",
      "24 / 7 Customer Support",
    ],
    buttonText: "Checkout Now",
  },
];
const plansFree = [
  {
    title: "FREE Lifetime Subscription PipCollector EA",
    price: "FREE",
    priceTime: "With Broker Sign-Up",
    features: [
      "5 Account Licenses (1 used for vantage)",
      "Step-by-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Setfile Finder",
      "Ready to trade setfiles",
      "24/7 Customer Support",
      "Get $200 cashback",
    ],
    buttonText: "Checkout Now",
  },
];

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PricingSection() {
  const [tab, setTab] = useState("paid");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const tabs = [
    {
      label: "Subscribe & Get Access",
      value: "paid",
      description:
        "Flexible Plans: monthly, 6 Month, annual & Lifetime subscriptions.",
    },
    {
      label: "FREE Access via Broker",
      value: "free",
      description: "Join Our Partnered Broker & Get FREE Lifetime Access",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleTooltip = () => setIsOpen(prev => !prev);

  return (
    <section id="pricing" className="py-16 px-4">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center rounded-[20px] shadow-[inset_0_0_10px_#ffffff33] sm:px-5 py-10"
      >
        <h2 className="text-xl md:text-5xl sm:leading-16 font-bold sm:mb-4 sm:px-0 px-5">
          Select A Plan. Start Trading Smarter.
        </h2>
        <div className="flex sm:flex-row flex-col items-start gap-0 max-w-4xl mx-auto">
          <div className="relative mt-1 group">
            <img
              src="/images/info-icon.png"
              alt=""
              onClick={toggleTooltip}
              className="cursor-pointer  w-[30px] h-[30px] min-w-[30px]"
            />
            <div
              className={`
          absolute text-start left-8 top-0 z-10 md:w-xl w-[280px] bg-[#656565] 
          backdrop-blur-md rounded-lg shadow-md overflow-hidden 
          before:absolute before:inset-0 before:bg-[url('/images/noise.jpg')] 
          before:bg-cover before:opacity-10 p-6 transition-opacity duration-200
          pointer-events-none group-hover:opacity-100 md:pointer-events-none
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
            >
              <h4 className="md:text-[32px] text-[24px] font-bold uppercase text-white">What is a setfile?</h4>
              <p className="text-[18px] text-white">
                Setfiles are strategy blueprints that tell the EA how to trade.
                Our Setfile Finder filters and matches setfiles based on your preferred drawdown level and account size — removing the need for manual testing or guesswork.
              </p>
            </div>
          </div>
          <p className="text-sm md:text-2xl sm:px-0 px-4 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent mb-8">
            All plans include full access to the EA (including future updates),
            ready to trade setfiles, settle finder, dashboard tools & 24/7
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:px-0 px-3 max-w-5xl mx-auto mb-4">
          {tabs.map((item, idx) =>
            tab === item.value ? (
              <div className="">
                <button
                  key={idx}
                  onClick={() => setTab(item.value)}
                  className="tab-button tab-button-active"
                >
                  {item.label}
                </button>
              </div>
            ) : (
              <div>
                <div key={idx} className="tab-button-inactive-wrapper">
                  <button
                    onClick={() => setTab(item.value)}
                    className="tab-button-inactive"
                  >
                    {item.label}
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-6 px-3 sm:px-0">
          <div><p className="xs:text-[14px] text-[16px]">Flexible Plans: monthly, 6 Month, annual & Lifetimesubscriptions.</p></div>
          <div><p className="xs:text-[14px] text-[16px]">Join Our Partnered Broker & Get FREE Lifetime Access</p></div>
        </div>

        {tab !== "paid" && (
          <>
            <h2 className="text-xl md:text-4xl sm:leading-12 capitalize font-bold mb-4">The Broker sign-up plan requires you to create and fund a LIVE <br /> account with One Of our partnered brokers</h2>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-0 mb-20 px-3 sm:px-0 text-white text-sm font-medium flex flex-wrap justify-center gap-4"
            >
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                No lock-in contracts - cancel anytime
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                Trusted by real traders. No gimmicks. No BS
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                Instant activation - get trading in minutes
              </span>
              <span className="flex items-center">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                Weekly setfile drops - tested & ready to go
              </span>
            </motion.div>
          </>
        )}

        {tab === "paid" ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="sm:px-12 px-3">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                loop
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="pb-12"
              >
                {plansPaid.map((plan, index) => (
                  <SwiperSlide key={index} className="xl:px-0 py-8">
                    <motion.div
                      variants={fadeUp}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      // transition={{ delay: 0.2 + index * 0.2 }}
                      whileHover={{ scale: 1.03 }} // smooth scale on hover
                      transition={{ delay: 0.1 + index * 0.1, type: "spring", stiffness: 300 }}
                      className="py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden hover:shadow-[0_0_25px_#fff] hover:cursor-pointer duration-300 bg-[#292929]"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                        Get INSTANT Access
                      </h3>
                      <h4 className="text-md text-white mb-2 relative z-10">
                        {plan.title}
                      </h4>
                      <p className="text-3xl font-semibold text-white mb-10 relative z-10">
                        {plan.price}
                        <small className="text-sm font-semibold">
                          /{plan.priceTime}
                        </small>
                      </p>
                      <ul className="text-white text-sm space-y-3 mb-12 relative z-10">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center ">
                            <span className="text-purple-600 mr-2">
                              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="border cursor-pointer border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10">
                        {plan.buttonText}
                      </button>
                      {/* <img
                        src="/images/bg-purple-shadow-2.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-full"
                      /> */}
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="absolute top-1/3 left-0 right-0 z-50 pt-12 hidden sm:flex justify-between gap-4">
              <button className="swiper-button-prev h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img src="./images/left.png" alt="Previous" className="mt-0 me-1" />
              </button>
              <button className="swiper-button-next h-10 w-10 rounded-full bg-white flex items-center justify-center cursor-pointer">
                <img src="./images/right.png" alt="Next" className="mt-0 ms-1" />
              </button>
            </div>

            {/* <div className="absolute top-1/3 right-0 left-0 flex justify-between gap-4 z-50 pt-12 sm:block hidden">
              <button className="swiper-button-prev leading-0 text-[#121212] h-10 w-10 rounded-full bg-white flex items-center justify-center text-2xl pb-2 cursor-pointer">
                <img src="./images/left.png" alt="" className="mt-2 me-1" />
              </button>
              <button className="swiper-button-next leading-0 text-[#121212] h-10 w-10 rounded-full bg-white flex items-center justify-center text-2xl pb-2 cursor-pointer">
                <img src="./images/right.png" alt="" className="mt-2 ms-1" />
              </button>
            </div> */}
          </motion.div>
        ) : (
          <>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col md:flex-row justify-center gap-6"
            >
              <div className="flex lg:flex-row flex-col gap-16 sm:px-0 px-6">
                {plansFree.map((plan, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 + index * 0.2 }}
                    className="w-full bg-white/10 py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden hover:shadow-[0_0_25px_#fff] hover:cursor-pointer duration-300 bg-[#292929]"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                      FREE Lifetime Subscription PipCollector EA
                    </h3>
                    <h4 className="text-md text-white mb-2 relative z-10">
                      {plan.title}
                    </h4>
                    <p className="text-3xl font-semibold text-white mb-5 relative z-10">
                      {plan.price}
                      <small className="text-sm font-semibold">
                        {plan.priceTime}
                      </small>
                    </p>
                    <ul className="text-white text-sm space-y-3  mb-12 relative z-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-purple-600 mr-2">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10 cursor-pointer">
                      {plan.buttonText}
                    </button>
                    {/* <img
                    src="/images/bg-purple-shadow-2.png"
                    alt=""
                    className="absolute bottom-0 right-0 w-full"
                  /> */}
                  </motion.div>
                ))}
                <div className="shadow-[0_0_25px_#fff] text-start rounded-3xl py-8 px-6 w-full sm:scale-110">
                  <h2 className="text-[28px] font-bold text-center">Get Started <span className="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">3 Simple Steps</span></h2>
                  <div className="">
                    <div class="text-white sm:p-6 space-y-6 rounded-lg">
                      <div class="bg-[#1b1b1b] p-4 rounded-md">
                        <h3 class="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">Step 1:</h3>
                        <p class="mt-2 text-sm">
                          On The Welcome Page After Check Out, Choose<br />
                          Which Broker You Want To Join:<br />
                          <span class="font-semibold">Vantage Markets</span> Or <span class="font-semibold">PUPrime</span>.
                        </p>
                      </div>
                      <div class="bg-[#1b1b1b] p-4 rounded-md">
                        <h3 class="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">Step 2:</h3>
                        <p class="mt-2 text-sm">
                          Click The Link Provided And Simply Create And<br />
                          Fund Your LIVE Account With A Minimum<br />
                          <span class="font-semibold">$1000 USD Deposit</span>.
                        </p>
                      </div>
                      <div class="bg-[#1b1b1b] p-4 rounded-md">
                        <h3 class="bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent font-semibold text-lg">Step 3:</h3>
                        <p class="mt-2 text-sm">
                          Once Your Account Is Funded, Open A Support<br />
                          Ticket In Our Discord Server — Our Team Will<br />
                          Get You Fully Set Up And Ready To Trade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-transparent p-6 rounded-2xl  mt-16">
              {/* <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-[40px] text-white mb-4 leading-tight font-semibold"
              >
                Broker sign-up plans require you to create and fund a LIVE account with our partnered broker Vantage Markets.
              </motion.h2> */}
              <h3 className="text-xl md:text-[30px] leading-tight font-extrabold  mb-4">
                Already have an account with Vantage Markets? No problem!
              </h3>
              <p className="text-[14px] md:text-[20px] bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent bg-clip-text text-transparent font-extrabold underline underline-offset-1 mb-2">
                Join our discord server, create a support ticket and our team will <br /> discuss your options and next steps.
              </p>
              <span className="underline font-bold text-white mb-3 inline-block">
                Unfortunately, we're unable to offer this plan to members residing in any of the <br /> countries listed above, as our partnered broker does not support them.
              </span>
              <p className="text-[14px] md:text-[16px] text-[#B1B1B1] mb-0">
                <span className="font-bold text-white">Prohibited Country List:</span> Afghanistan, Albania, American Samoa, Australia, Belarus, Bermuda, Bosnia and Herzegovina, Burma/Myanmar, Burundi, Canada, Central African Republic, China, Crimea, Cuba, Democratic Republic of the Congo, Eritrea, Former Federal Republic of Yugoslavia, Guam, Iran, Iraq, ISIL (Da’esh) & Al-Qaida & The Taliban, Japan, Lebanon, Libya, Mali, Montenegro, North Korea, Northern Mariana Islands, Puerto Rico, Republic of Guinea, Republic of Guinea-Bissau, Sevastopol, Sierra Leone, Singapore, Somalia, South Sudan, Sudan, Syria, United States of America, United States Virgin Islands, Venezuela, Yemen, Zimbabwe.
              </p>
            </motion.div>
          </>
        )}
        {tab === "paid" && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-10 px-3 sm:px-0 text-white text-sm font-medium flex flex-wrap justify-center gap-4"
          >
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
              No lock-in contracts - cancel anytime
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
              Trusted by real traders. No gimmicks. No BS
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
              Instant activation - get trading in minutes
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
              Weekly setfile drops - tested & ready to go
            </span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
