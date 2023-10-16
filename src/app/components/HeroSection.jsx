'use client'
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from "react-type-animation"
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
import Quote from './Quote'
const HeroSection = () => {
    return (
        <section className='min-h-screen' id='home'>
            <div className='grid grid-cols-1 sm:grid-cols-12 px-4 gap-4'>
                <div className='col-span-6 justify-center flex flex-col'>
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className="text-white mb-4 text-4xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Hello, We&apos;re{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Funbug Team",
                                1000,
                                "Web Developer",
                                1000,
                                "Mobile Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className='text-secondary mb-4'>
                        Team Funbug: Innovation, expertise, collaboration - Empowering software development with quality.
                    </motion.p>
                    <motion.a
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        href="https://www.facebook.com/profile.php?id=100092449950011" target='blank' className='border-2 border-primary p-2 text-white block w-fit'>
                        Contact my team !!
                    </motion.a>
                </div>
                <div className='col-span-6'>
                    <motion.div
                        variants={fadeIn('down', 0.4)}
                        initial='hidden'
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.6 }}
                        className='relative max-w-[457px] min-h-[386px] w-full h-full'>
                        <Image
                            src='/assets/square.png'
                            width={155}
                            height={155}
                            className='absolute top-1/3 z-10'
                            alt=''
                        />
                        <Image
                            src='/assets/user.png'
                            width={457} 
                            height={386}
                            className='z-20 block absolute'
                            alt=''
                        />
                        <Image
                            src='/assets/dots.png'
                            width={84}
                            height={84}
                            className='z-30 block absolute right-0 bottom-1/4'
                            alt=''
                        />
                    </motion.div>
                </div>
            </div>
            <Quote />
        </section>
    )
}

export default HeroSection