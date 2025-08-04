import React from 'react';
import Button from './elements/Button';
import { motion } from "framer-motion";
import { fadeUp } from './SubscriptionSection';

export default function CallToActionSection() {
  return (
    <section id="contact-us" className="pt-6 xl:pb-0 lg:pb-20 pb-40 first-section">
      <div className="relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white container mx-auto max-w-5xl text-center z-10 px-4 absolute right-0 left-0 top-1/3"
        >
          {/* <motion.img
            src="/images/logo.png"
            alt="ThePipCollective Logo"
            className="mx-auto mb-4 w-42 sm:w-56"
            variants={fadeUp}
          /> */}

          <motion.h3
            className="text-[24px] sm:text-[48px] md:text-[60px] font-extrabold leading-tight mb-4 mt-16"
            variants={fadeUp}
          >
            Real Edge. No BS. <br /> Just Trades That Work.
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[24px] text-[#898989] mb-6 sm:mb-8"
            variants={fadeUp}
          >
            The edge you’ve been trying to find — delivered.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
            variants={fadeUp}
          >
            <Button link href="#" className='primaryBtn'>Join Us For Free</Button>
          </motion.div>
        </motion.div>
        <img
          src="/images/shadow-img-3.png"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
}
