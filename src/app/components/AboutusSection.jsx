'use client'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const AboutusSection = () => {
    const people = [
        {
            name: 'Cường',
            position: 'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.',
            description: 'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.'
        },
        {
            name: 'Đức',
            position: 'I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.',
            description: 'Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.'
        },

    ]
    const [active, setActive] = useState(0);
    useEffect(() => {
        let items = document.querySelectorAll('.item');
        let list = document.querySelector('.list')
        let checkLeft = items[active].offsetLeft
        list.style.left = -checkLeft + 'px'
    }, [active])
    return (
        <section className='px-4 mt-8' id='about-us'>
            <Heading title="about-us" />
            <div className='py-2'>
                <div className="slider md:max-w-5xl max-w-md relative h-[100vh] md:h-[75vh] overflow-hidden">
                    <div className="list absolute top-0 left-0 h-full flex w-max duration-1000">
                        {people.map((person, index) => {
                            return (
                                <div className="item grid md:grid-cols-12 md:max-w-5xl max-w-md" key={index}>
                                    <div className='col-span-6 text-secondary'>
                                        <motion.p
                                            variants={fadeIn('left', 0.2)}
                                            initial='hidden'
                                            whileInView={"show"}
                                            viewport={{ once: false, amount: 0.6 }}
                                            className='md:mt-4 mt-2'>Hello, i’m Elias!</motion.p>
                                        <motion.p
                                            variants={fadeIn('left', 0.4)}
                                            initial='hidden'
                                            whileInView={"show"}
                                            viewport={{ once: false, amount: 0.6 }}
                                            className='md:mt-8 mt-2 break-words overflow-y-auto h-[100px] md:h-fit w-[78%] md:w-full'>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </motion.p>
                                        <motion.p
                                            variants={fadeIn('left', 0.6)}
                                            initial='hidden'
                                            whileInView={"show"}
                                            viewport={{ once: false, amount: 0.6 }}
                                            className='md:mt-8 mt-2 break-words overflow-y-auto h-[100px] md:h-fit w-[78%] md:w-full'>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</motion.p>
                                    </div>
                                    <div className="hidden md:block col-span-1"></div>
                                    <motion.div
                                        variants={fadeIn('down', 0.6)}
                                        initial='hidden'
                                        whileInView={"show"}
                                        viewport={{ once: false, amount: 0.6 }}
                                        className="col-span-5 relative">
                                        <Image
                                            src={"/assets/dots.png"}
                                            width={84}
                                            height={84}
                                            className='absolute top-12 left-4 w-12 h-12 md:w-20 md:h-20'
                                            alt=''
                                        />
                                        <Image
                                            src={"/assets/dots.png"}
                                            width={64}
                                            height={64}
                                            className='absolute right-0 top-1/2 w-12 h-12 md:w-20 md:h-20 object-cover'
                                            alt=''
                                        />
                                        <Image
                                            src={"/assets/user2.png"}
                                            width={340}
                                            height={450}
                                            className='border-b-2 border-primary block h-[400px] w-[300px] object-cover md:w-[340px] md:h-[450px]'
                                            alt=''
                                        />
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="dots absolute bottom-0 text-white m-0 p-0 flex justify-center w-full">
                        {people.map((person, index) => {
                            return (
                                <motion.li
                                    variants={fadeIn('left', 0.2)}
                                    initial='hidden'
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.6 }}
                                    onClick={() => setActive(index)}
                                    className={`${active === index ? 'w-8' : 'w-3'} list-none h-3 bg-white m-4 rounded-3xl duration-1000`}
                                    key={index}
                                ></motion.li>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutusSection