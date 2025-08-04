import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const FeatureCard = ({ item, idx, inView }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [inView, controls]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-[#191919] p-4 sm:p-6 text-start "
        >
            <div className="flex items-start gap-4 relative z-10">
                <div className="">
                    <img src="./images/R-Tick Square.png" className="mb-3" alt="" />
                <div className="">
                    <h3 className="text-base sm:text-lg font-bold mb-1 bg-[linear-gradient(90deg,_rgba(171,_0,_212,_1)_0%,_rgba(129,_27,_192,_1)_23%,_rgba(93,_61,_187,_1)_58%,_rgba(4,_154,_203,_1)_100%)] bg-clip-text text-transparent">{item.title}</h3>
                    <p className="text-[#fff] text-sm sm:text-base">{item.description}</p>
                </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
