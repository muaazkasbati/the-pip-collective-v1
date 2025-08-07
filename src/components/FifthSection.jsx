import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// const testimonials = [
//   {
//     id: 1,
//     name: "Daniella A-",
//     position: "TPC Member",
//     text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
//     image: "/images/testi-img.png",
//   },
//   {
//     id: 2,
//     name: "Daniella A-",
//     position: "TPC Member",
//     text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
//     image: "/images/testi-img.png",
//   },
//   {
//     id: 3,
//     name: "Daniella A-",
//     position: "TPC Member",
//     text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
//     image: "/images/testi-img.png",
//   },
//   {
//     id: 4,
//     name: "Daniella A-",
//     position: "TPC Member",
//     text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
//     image: "/images/testi-img.png",
//   },
// ];

const testimonials = [
  {
    id: 1,
    name: "Claire Jubbie",
    position: "TPC Member",
    text: "An EA with offers great support from the creator.\nI'm still getting to grips with the settings and testing but the help Connor offers is invaluable.",
    image: "/images/testi-img.png",
  },
  {
    id: 2,
    name: "customer",
    position: "TPC Member",
    text: "Amazing product and team. It will take some time to learn some of the processes but the team are on hand to help. Would fully recommend.",
    image: "/images/testi-img.png",
  },
  {
    id: 3,
    name: "Peter Lamberti",
    position: "TPC Member",
    text: "Awesome EA and awesome team.\nUnlike others, this EA is much more predictable and profitable even with small lot sizes. The team is very responsive and genuinely helpful.",
    image: "/images/testi-img.png",
  },
  {
    id: 4,
    name: "Saim Saudagar",
    position: "TPC Member",
    text: "I used to trade manually all day and lost 4 challenges. Now the EA earns while I sleep. Made 3% in 5 days. Highly recommended!",
    image: "/images/testi-img.png",
  },
  {
    id: 5,
    name: "Martin",
    position: "TPC Member",
    text: "Transparent EA trading with the pip collective. Simple and effective, backed with years of experience and great customer service. 10/10!",
    image: "/images/testi-img.png",
  },
  {
    id: 6,
    name: "Basheer Abdullah",
    position: "TPC Member",
    text: "Very robust EA with full support to help you get funded. No fluff, just simple processes. Connor was very supportive — got me running in 1-2 hours.",
    image: "/images/testi-img.png",
  },
  {
    id: 7,
    name: "Daniella A",
    position: "TPC Member",
    text: "First EA I've ever used and it opened my eyes to automated trading. Incredible support and easy onboarding despite no prior experience.",
    image: "/images/testi-img.png",
  },
  {
    id: 8,
    name: "Abx beatz",
    position: "TPC Member",
    text: "True definition of hands-free. Beginner-friendly and support is always there. Best EA I’ve used so far!",
    image: "/images/testi-img.png",
  },
  {
    id: 9,
    name: "Joel Pearson",
    position: "TPC Member",
    text: "After 5 years of disappointment with EAs, this one finally delivered. Passed FTMO challenge and support is unmatched. A life changer.",
    image: "/images/testi-img.png",
  },
  {
    id: 10,
    name: "Roberto Silva",
    position: "TPC Member",
    text: "Clever and beginner-friendly EA. Only one trade allowed at a time, unique features, and founders are always responsive. Great support.",
    image: "/images/testi-img.png",
  },
  {
    id: 11,
    name: "Bethany",
    position: "TPC Member",
    text: "Simple to use, 2% profit on a funded account. Connor is fab and very helpful. Highly recommend!",
    image: "/images/testi-img.png",
  },
  {
    id: 12,
    name: "Connor Bolton",
    position: "TPC Member",
    text: "Best EA I have ever used. Super simple and intuitive, much better than others in the market.",
    image: "/images/testi-img.png",
  },
  {
    id: 13,
    name: "Lee Maxwell",
    position: "TPC Member",
    text: "Easy to use and not overcomplicated. Great results on my FTMO challenge and first-class support from Connor. Excited for funded accounts!",
    image: "/images/testi-img.png",
  },
];


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from 'react';

export default function FifthSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const generateInitials = (name) => {
    if (!name) return "N/A"; // Default fallback
    const words = name.split(" ");
    return words
      .slice(0, 2) // Take at most 2 words
      .map((word) => word[0]?.toUpperCase()) // Take the first letter of each word
      .join("");
  };

  return (
    <section className="pt-0 pb-0 px-0">
      <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className=""
      >
        <div className='px-[20px] lg:px-[90px]'>
          <h2 className="text-2xl sm:text-4xl md:text-[54px] font-bold text-white">
            Trusted By Traders Worldwide.
          </h2>
          <h3 className="text-xl sm:text-4xl md:text-[36px] sm:leading-16 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent bg-clip-text text-transparent ">
            Real Edge. No BS. Just Trades That Work.
          </h3>
          <p className='text-white text-base sm:text-lg mb-10'>
            The edge you’ve been trying to find - delivered.
          </p>
        </div>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="relative mb-10"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            loop={true}
            pagination={{ clickable: true }}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => {
              const isExpanded = expandedIndex === index;
              const shouldTruncate = testimonial.text.length > 100;
              return (
                <motion.div
                  key={testimonial.id}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  <SwiperSlide className="swiper-slide testimonial-slide transition-opacity duration-300">
                    <div className="bg-white/10 p-3 sm:p-10 rounded-xl text-left">
                      <div className="flex sm:gap-4 gap-2 items-center mb-4">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-[#A200F5] text-white uppercase text-[20px] font-bold flex items-center justify-center">
                          {/* {generateInitials(testimonial.name)} */}
                          <img src="./images/testi-img.png" className='rounded-full oject-cover w-full h-full' alt="" />
                        </div>
                        <div>
                          <h3 className="text-[13px] sm:text-[20px] uppercase font-bold text-white">{testimonial.name}</h3>
                          <p className="text-[11px] sm:text-[16px] text-white">{testimonial.position}</p>
                        </div>
                      </div>
                      {/* <p className="text-white text-[16px] sm:text-[18px]">{testimonial.text}</p> */}
                      <div className={`${isExpanded ? "sm:h-28" : "sm:h-24"}`}>
                        <h4 className='font-semibold text-[16px] text-[#A200F5] sm:text-[20px]'>Auto Setfile Finder</h4>
                        <p
                          className={`text-white text-[11px] sm:text-[16px] overflow-hidden transition-all duration-300 ${!isExpanded
                            ? '[display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]'
                            : ''
                            }`}
                        >
                          {testimonial.text}
                        </p>

                        {shouldTruncate && (
                          <button
                            onClick={() => toggleExpand(index)}
                            className={`text-xs sm:text-sm text-[#A200F5] font-medium mt-2 underline cursor-pointer ${isExpanded ? "pb-3" : ""}`}
                          >
                            {isExpanded ? 'See less' : 'See more'}
                          </button>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                </motion.div>
              )
            })}
          </Swiper>

          {/* <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
          <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
