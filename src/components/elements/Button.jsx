// import Link from 'next/link'
// import React from 'react'

// export default function Button({ link = false, children, onClick, href = "", className = "", gradient = false }) {
//     const clases = `bg-transparent px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow-[1px_0_8px_#A200F5] hover:shadow-[3px_0_12px_#A200F5] transition-all duration-300 ${gradient ? "bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent" : "text-white"}`

//     return (
//         <>
//             {link ? (
//                 <Link href={href} className={`${clases} ${className}`}>
//                     {children}
//                 </Link>
//             ) : (
//                 <button onClick={onClick} className={`${clases} ${className}`}>
//                     {children}
//                 </button>
//             )}
//         </>
//     )
// }

import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

export default function Button({
    link = false,
    children,
    onClick,
    href = "",
    className = "",
    gradient = false
}) {
    const clases = `bg-transparent px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow-[1px_0_8px_#A200F5] hover:shadow-[3px_0_12px_#A200F5] transition-all duration-300 ${gradient
            ? "bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent"
            : "text-white"
        }`

    const MotionEl = motion(link ? Link : "button")

    return (
        <MotionEl
            {...(link ? { href } : { onClick })}
            className={`${clases} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </MotionEl>
    )
}
