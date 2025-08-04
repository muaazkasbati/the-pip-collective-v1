import { motion } from 'framer-motion';
import Button from './elements/Button';


export const FooterAbroad = () =>{

    return(
        <div className="relative py-12 mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4"
          >
            <h3 className="text-xl md:text-[48px] font-semibold pb-6 mb-4 relative inline-block mx-auto">
              Join Our Discord Server
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col mb-4 max-w-md mx-auto w-full"
            >
              <Button className='primaryBtn cursor-pointer'>Take Me To The Server!</Button>
            </motion.div>
          </motion.div>
          <motion.div
          initial={{ filter: 'drop-shadow(0 -60px 20px #A200F5)', opacity: 0.3 }}
            animate={{ filter: 'drop-shadow(0 -30px 10px #A200F5)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full object-cover absolute sm:top-[-50px] -top-0"
          >
            <div className='w-full'>
              <img src="./images/banner-bg-3.png" alt="" className='w-full' />
            </div>
          </motion.div>
          
        </div>
    )
}