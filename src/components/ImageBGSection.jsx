import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ImageBGSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <div ref={containerRef} className="w-full overflow-hidden relative h-[100vh]">
            <motion.img
                src="/images/bg-mobile-img.png"
                alt="Video thumbnail"
                style={{ scale }}
                className="w-full h-full object-cover will-change-transform"
            />
            <div className="h-full w-[180px] md:w-[320px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
            <div className="h-full w-[180px] md:w-[320px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
            <div className="w-full h-[180px] md:h-[320px] absolute top-0 bg-gradient-to-b from-[#121212] to-transparent"></div>
            <div className="w-full h-[180px] md:h-[320px] absolute bottom-0 bg-gradient-to-b to-[#121212] from-transparent"></div>
        </div>
    );
}
