import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const pathname = window.location.pathname;
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-4 absolute top-0 left-0 w-full z-20"
    // style={{position: "absolute", width: "100%",}}
    >
      <div className="flex items-center justify-between text-white container max-w-7xl mx-auto">
        <motion.img
          src="/images/logo.png"
          alt="The Pip Collective Logo"
          className="w-[80px] md:w-[187px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />


        {/* <button
          className="md:hidden z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          )}
        </button> */}

        {/* Desktop Navigation */}
        {/* <nav
          className="hidden md:flex space-x-8 py-4 px-6 rounded-[40px] backdrop-blur-3xl shadow-2xl shadow-black/20 bg-white/5 text-[16px] font-medium 
          overflow-hidden relative before:absolute before:block before:top-0 before:left-0 before:h-full before:w-full before:opacity-20 before:bg-[url('/images/noise.jpg')] before:bg-cover before:bg-blend-overlay"
        >
          {["Why Us", "Pricing", "Copy Trade", "Expectations", "FAQs", "Contact Us"].map((label, i) => (
            <motion.a
              key={i}
              href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
              whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:bg-gradient-to-l hover:[background-image:linear-gradient(to_left,_white_20%,_#A200F5_70%)] hover:bg-clip-text hover:text-transparent relative z-10"
            >
              {label}
            </motion.a>
          ))}
        </nav> */}

        {/* Desktop CTA */}
        <div className="flex items-center space-x-4 text-[18px]">
          {pathname !== '/welcome_abroad' && pathname !== '/welcome_abroad2' && (
            <motion.a
              href="https://thepipcollective.com/login"
              whileHover={{ scale: 1.05 }}
              className="hover:text-[#A200F5] font-semibold sm:text-[16px] text-[10px]"
            >
              Login
            </motion.a>
          )}
          <motion.a
            href="#access"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primaryBtn"
          >
            Get Access
          </motion.a>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium text-white"
          >
            {[
              "Why Us",
              "Pricing",
              "Copy Trade",
              "Expectations",
              "FAQs",
              "Contact Us",
              "Login",
              "Get Access",
            ].map((label, i) => {
              if (
                label === "Login" &&
                (pathname === "/welcome_abroad" || pathname === "/welcome_abroad2")
              ) {
                return null; // skip rendering Login if on /welcome_abroad or /welcome_abroad2
              }

              return (
                <motion.a
                  key={i}
                  href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05, color: "#D8B4FE" }}
                  className={
                    label === "Get Access"
                      ? "primaryBtn"
                      : label === "Login"
                        ? "hover:text-[#A200F5] font-semibold"
                        : "hover:text-[#A200F5]"
                  }
                >
                  {label}
                </motion.a>
              );
            })}
          </motion.div>

          // <motion.div
          //   initial={{ opacity: 0, y: "-10%" }}
          //   animate={{ opacity: 1, y: 0 }}
          //   exit={{ opacity: 0, y: "-10%" }}
          //   transition={{ duration: 0.3 }}
          //   className="md:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 text-lg font-medium text-white"
          // >
          //   {[
          //     "Why Us",
          //     "Pricing",
          //     "Copy Trade",
          //     "Expectations",
          //     "FAQs",
          //     "Contact Us",
          //     "Login",
          //     "Get Access",
          //   ].map((label, i) => (
          //     <motion.a
          //       key={i}
          //       href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
          //       onClick={() => setIsMenuOpen(false)}
          //       whileTap={{ scale: 0.95 }}
          //       whileHover={{ scale: 1.05, color: "#D8B4FE" }}
          //       className={`${label === "Get Access"
          //           ? "primaryBtn"
          //           : label === "Login"
          //             ? "hover:text-[#A200F5] font-semibold"
          //             : "hover:text-[#A200F5]"
          //         }`}
          //     >
          //       {label}
          //     </motion.a>
          //   ))}
          // </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
