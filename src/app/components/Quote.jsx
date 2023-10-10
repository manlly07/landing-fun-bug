'use client'
import Image from 'next/image'
import React from 'react'
import { motion, easeInOut } from 'framer-motion'

import { fadeIn } from '@/variants'
const Quote = () => {
    return (
        <section className='w-fit m-auto px-4 md:my-16'>
            <motion.div
                variants={fadeIn('left', 0.6)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className='w-fit p-4 text-white border border-secondary text-center relative'>
                "Building a strong brand is like laying a solid foundation for enduring trust and credibility."
                <Image
                    src="/assets/quote.png"
                    width={24}
                    height={24}
                    className='absolute -top-3'
                    alt=''
                />
            </motion.div>
            <motion.div
                variants={fadeIn('right', 0.8)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0 }}
                className='ml-auto w-fit p-4 text-white border border-t-0 border-secondary text-center relative'>
                - Fun bug
                <Image
                    src="/assets/quote.png"
                    width={24}
                    height={24}
                    className='absolute -top-3 right-3'
                    alt=''
                />
            </motion.div>
        </section>
    )
}

export default Quote