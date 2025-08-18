import { useState } from 'react';
import Button from './elements/Button';

const faqs = [
  {
    "id": 1,
    "question": "What is an EA?",
    "answer": "An EA (Expert Advisor) is an automated trading tool that runs on platforms like MT4/MT5. It places, manages, and exits trades based on pre-coded logic - no manual input required."
  },
  {
    "id": 2,
    "question": "What is a setfile?",
    "answer": "A setfile is like a strategy blueprint. It tells the EA how to trade - what risk to take, how to enter/exit trades and more"
  },
  {
    "id": 3,
    "question": "What’s the Setfile Finder?",
    "answer": "Our built-in Setfile Finder matches the best strategy to your account size and drawdown preferences – so you streamline your time testing."
  },
  {
    "id": 4,
    "question": "Do you provide setfiles?",
    "answer": "Absolutely - you’ll get regularly updated, optimised setfiles ready to go. But we don’t stop there. We also give you the resources to understand how they work, so you're not just copying, you're learning to trade with real independence."
  },
  {
    "id": 5,
    "question": "How many accounts can I use with the TPC EA?",
    "answer": "Each subscription includes 5 account licences so you can run on multiple accounts or across different brokers."
  },
  {
    "id": 6,
    "question": "Does ThePipCollector EA work on MT4 or MT5?",
    "answer": "MT5 only. The EA is built and tested specifically for MetaTrader 5."
  },
  {
    "id": 7,
    "question": "Does this work on both live accounts and prop firms?",
    "answer": "Yes it’s built for both. Built with precision, clean risk parameters and adaptive logic that performs across all trading environments."
  },
  {
    "id": 8,
    "question": "Is this really free with broker sign-up?",
    "answer": "Yes - you can unlock lifetime access by signing up through our preferred broker. Don’t want to? Paid plans are available too."
  }
];

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id='faqs' className="pt-0 px-4 relative" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto text-center relative"
      >
        <div className="relative z-10">

          <h2 className="text-[24px] sm:text-3xl md:text-[48px] text-white font-semibold mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>

          <p className="font-medium text-[12px] sm:text-[16px] md:text-[20px] mb-8 max-w-3xl mx-auto bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">
            Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexAI.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
      <img src="/images/purple-shadow-bg-101.png" alt="" className='absolute sm:block hidden top-20 md:left-10' />
      <img src="/images/purple-shadow-bg-102.png" alt="" className='absolute sm:block hidden top-20 md:right-0' />
    </section>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(index == 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={` backdrop-blur-lg relative transition-colors ${isOpen ? "bg-white/5 backdrop-blur-sm border border-white/10 rounded-md rounded-xl" : "border-b border-white/10"}`}
    >
      <button
        className={`w-full text-left relative z-10 px-4 md:px-6 pt-4 md:pt-6 ${isOpen ? "pb-2" : "pb-4 md:pb-6"} flex justify-between items-center text-white cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[12px] sm:text-[18px] md:text-[24px] font-normal">{question}</span>
        <span
          className="w-5 sm:w-9 h-5 sm:h-9 md:w-10 md:h-10 shrink-0 rounded-full border border-white/10 text-[15px] flex justify-center items-center"
          style={{ lineHeight: 0 }}
        >
          {isOpen ? (
            <svg className="sm:w-[24px] sm:h-[25px] w-[12px] h-auto" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12.3208H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="sm:w-[24px] sm:h-[25px] w-[12px] h-auto" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12.3208H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 18.3208V6.3208" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden relative z-10"
          >
            <p className="px-4 md:px-6 pb-4 md:pb-6 text-[#898989] text-[10px] sm:text-[16px] md:text-[18px] text-left">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpen && <>
        <img src="/images/purple-shadow-bg-102.png" alt="" className='absolute sm:block hidden top-0 md:left-16 left-2' />
        <img src="/images/faq-line-1.png" alt="" className='absolute top-0 md:left-36 left-4' />
        <img src="/images/faq-line-2.png" alt="" className='absolute bottom-0 md:right-36 right-4' />
      </>}
    </motion.div>
  );
}
