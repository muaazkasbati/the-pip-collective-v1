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
    <section id="access" className="sm:pt-16 pt-8 sm:pb-16 pb-4 px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#121212] flex flex-row items-end overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-white/25 rounded-xl backdrop-blur-lg"
      >
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="sm:w-1/3 mb-0"
        >
          <img
            src="/images/subscription-img.png"
            alt="Trader"
            className="w-auto h-[95px] sm:h-auto lg:h-[350px] object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="sm:w-2/3 text-center py-8 sm:px-4 px-1"
        >
          <h2 className="text-[14px] sm:text-[24px] md:text-[42px] leading-snug font-bold md:mb-4">
            Unlock Your Edge In The Markets
          </h2>
          <p className="text-[6px] sm:text-[18px] md:text-[20px] font-medium bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent ">
            Be the first to get EA updates and exclusive offers — straight to your inbox.
            <br />
          </p>
            <span className="text-[6px] sm:text-[12px] block mt-1 mb-6">
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
            <div className='flex flex-row items-center justify-center sm:gap-2 gap-x-2'>
              <label htmlFor="name" className="md:text-center text-left inline-block text-white sm:text-[16px] text-[8px] w-auto">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="sm:w-120 w-full sm:px-3 px-1.5 sm:py-3 py-0.5 bg-[#D9D9D9]/10 sm:text-[16px] text-[8px] text-white sm:rounded-[10px] rounded-[4px] placeholder:text-[#cccccc]"
                placeholder="Your Name"
              />
            </div>
            <div className='flex flex-row items-center justify-center sm:gap-2 gap-x-2'>
              <label htmlFor="email" className="md:text-center text-left inline-block text-white sm:text-[16px] text-[8px] w-auto ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="sm:w-120 w-full sm:px-3 px-1.5 sm:py-3 py-0.5 bg-[#D9D9D9]/10 sm:text-[16px] text-[8px] text-white sm:rounded-[10px] rounded-[4px] placeholder:text-[#cccccc]"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full text-center">
            <button
              type="submit"
              className="primaryBtn sm:text-inherit! text-[10px]!"
            >
              {/* Sign-up! */}
              Unlock Free Lifetime Access
            </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
