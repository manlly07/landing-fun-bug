'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import Link from 'next/link'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const ContactSection = () => {
  return (
    <div className='px-4 mt-16' id='contact'>
        <Heading title="contacts" />
        <div className='py-8 text-secondary grid md:grid-cols-12 gap-8'>
            <motion.div
                variants={fadeIn('left', 0.2)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.6 }}
            className='md:col-span-6'> 
                I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </motion.div>
            <div className='md:col-span-6'> 
                <motion.div
                    variants={fadeIn('down', 0.4)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}
                className='border border-secondary w-fit p-2 md:ml-auto'>
                    <span className='text-white font-medium'>Message me here</span>
                    <div className='mt-4 flex gap-2'>
                        <Image
                            src="/assets/mail.png"
                            width={20}
                            height={18}
                        />
                        <Link
                            href={"mailto:funbug0909@gmail.com"}
                        >funbug0909@gmail.com</Link>
                    </div>
                    <div className='mt-4 flex gap-2'>
                        <Image
                            src="/assets/facebook.png"
                            width={20}
                            height={18}
                            className='mix-blend-darken'
                        />
                        <Link
                            href={"https://www.facebook.com/profile.php?id=100092449950011"}
                            target='blank'
                        >Fun Bug</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection