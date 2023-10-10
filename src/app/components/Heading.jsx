'use client'
import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const Heading = ({ title, view }) => {
    return (
        <div className='flex items-center gap-2 text-white md:text-xl w-full'>
            <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className=''>
                <span className='text-primary'>#</span>
                {title}
            </motion.h2>
            <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
                className='h-[1px] bg-primary w-1/3'></motion.div>
            {view &&
                <motion.div
                    variants={fadeIn('right', 0.6)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                    className='ml-auto'>
                    <Link className='inline-flex items-center text-base'
                        href={"/"}
                    >
                        View all
                        <ChevronRightIcon className="h-5 w-5" />
                    </Link>
                </motion.div>
            }
        </div>
    )
}

export default Heading