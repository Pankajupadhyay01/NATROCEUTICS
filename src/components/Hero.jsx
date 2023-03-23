import React from 'react';
import { motion } from 'framer-motion'


const Hero = () => {
    return (
        <div className='pt-[50px]'>
            <div className='w-[90%] m-auto flex flex-col text-[#1d4130] font-semibold'>
                <div className='py-[80px] text-[32px] sm:text-[42px] md:text-[62px] lg:text-[72px] w-full'>
                    <motion.div
                        whileInView={{scale:[0,1]}}
                        transition = {{ease:"easeInOut" , type:"spring"}}
                    >
                        <span className='ml-[50px]'>Enhancing your</span>  experience of life
                    </motion.div>
                    <motion.div
                        whileInView={{scale:[0,1]}}
                        transition = {{ease:"easeInOut", type:"spring"}}
                    >through nature and science.
                    </motion.div>
                </div>
                <div>
                    <div>We are here to deliver you the best available nature-based</div>
                    <div>therapeutics the world’s leading experts have to offer.</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
