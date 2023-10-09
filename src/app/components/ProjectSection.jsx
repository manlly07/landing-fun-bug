'use client'
import React from 'react'
import Heading from './Heading'
import ProjectCard from './ProjectCard'
import { motion, easeInOut } from 'framer-motion'
import { fadeIn } from '@/variants'
const projects = [
    {
        image: "/assets/product1.png",
        language: "HTML SCSS Python Flask",
        name: "ChertNodes",
        description: "Minecraft servers hosting",
    },
    {
        image: "/assets/product2.png",
        language: "React Express Discord.js Node.js HTML SCSS Python Flask",
        name: "ProtectX",
        description: "Discord anti-crash bot",
    },
    {
        image: "/assets/product3.png",
        language: "HTML SCSS Python Flask",
        name: "Kahoot Answers Viewer",
        description: "Get answers to your kahoot quiz",
    },
    
]
const ProjectSection = () => {
  return (
    <section className='px-4' id='works'>
        <Heading title="projects" view={true} />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-8'>
            {projects.map((project, index) => {
                return (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                )
            })}
        </div>
    </section>
  )
}

export default ProjectSection