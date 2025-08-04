import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function SubscriptionSection() {
  return (
    <section id="access" className="py-16 px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#121212] flex flex-col lg:flex-row lg:items-end items-center overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-white/25 rounded-xl"
      >
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <img
            src="/images/subscription-img.png"
            alt="Trader"
            className="w-auto h-auto lg:h-[350px] object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-2/3 text-center py-8 px-4"
        >
          <h2 className="text-[22px] sm:text-[24px] md:text-[42px] leading-snug font-bold md:mb-4">
            Unlock Your Edge In The Markets
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent ">
            Be the first to get EA updates and exclusive offers — straight to your inbox.
            <br />
          </p>
            <span className="text-[12px] block mt-1 mb-6">
              We respect your privacy. Unsubscribe anytime.
            </span>

          {/* Form */}
          <form className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "https://docs.google.com/spreadsheets/d/1n8baR8zHTmXPXX4EK0ARgAzZMBdeQojAVlppw6wXEAo/edit?usp=sharing";
            }}
          >
            <div className='flex sm:flex-row flex-col items-center gap-2'>
              <label htmlFor="name" className="block text-white text-[16px] mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="sm:w-120 w-full px-3 py-3 bg-[#D9D9D9]/10 text-[16px] text-white rounded-[10px] placeholder:text-[#cccccc]"
                placeholder="Your Name"
              />
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-2'>
              <label htmlFor="email" className="block text-white text-[16px] mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="sm:w-120 w-full px-3 py-3 bg-[#D9D9D9]/10 text-[16px] text-white rounded-[10px] placeholder:text-[#cccccc]"
                placeholder="Your Email"
              />
            </div>
            <div className="sm:w-150 w-full text-center">
            <button
              type="submit"
              className="primaryBtn"
            >
              Unlock Free Lifetime Access
            </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
