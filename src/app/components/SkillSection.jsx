'use client'
import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const SkillSection = () => {
  return (
    <div className='px-4 mt-16' id='skills'>
      <Heading title="skills" />
      <div className='skills flex gap-2 flex-wrap  mt-4 md:justify-between'>
        <motion.img
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/reactjs.png" loading='lazy' alt="reactjs" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/vuejs.jpg" loading='lazy' alt="vuejs" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/angularjs.jpg" loading='lazy' alt="angularjs" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 0.8)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/mongodb.png" loading='lazy' alt="mongodb" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 1.0)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/java.jpg" loading='lazy' alt="spring" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 1.2)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/tailwind.jpg" loading='lazy' alt="tailwind" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 1.4)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/nextjs.png" loading='lazy' alt="nextjs" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
        <motion.img
          variants={fadeIn('right', 1.6)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
          src="/assets/csharp.png" loading='lazy' alt="csharp" className='lg:w-[96px] lg:h-[96px] object-cover shrink-0 rounded-md w-[48px] h-[48px] md:w-[72px] md:h-[72px]' />
      </div>
    </div>
  )
}

export default SkillSection