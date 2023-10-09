import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const ProjectCard = ({project}) => {
  return (
    <motion.div
    variants={fadeIn('left', 0.2)}
    initial='hidden'
    whileInView={"show"}
    viewport={{ once: false, amount: 0 }}
    className='m-auto text-secondary'>
        <div className='border border-secondary pb-2 h-[420px] flex flex-col'>
            <Image
                src={project.image}
                width={330}
                height={200}
                className='block border-b'
                alt=''
            />
            <div className='p-2 break-words w-[330px]'>
                {project.language}
            </div>
            <div className='p-2 border-t mt-auto'> 
                <h3 className='text-2xl text-white mb-2'>{project.name}</h3>
                <span>{project.description}</span>
                <Link
                    href="#"
                    className='border border-primary p-2 flex items-center w-fit mt-4'
                >
                    Live
                    <ArrowLongRightIcon className='w-8 h-5'/>
                </Link>
            </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard