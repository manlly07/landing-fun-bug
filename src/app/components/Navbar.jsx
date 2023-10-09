'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Nav from './Nav'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import {Link as LinkScroll} from 'react-scroll'
const navLinks = [
    {
        title: "home",
        path: "home",
    },
    {
        title: "works",
        path: "works",
    },
    {
        title: "skills",
        path: "skills",
    },
    {
        title: "about-us",
        path: "about-us",
    },
    {
        title: "contact",
        path: "contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed mx-auto top-0 left-0 right-0 z-50 bg-background'>
            <div className="flex max-w-5xl lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <LinkScroll
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                >
                    <Image
                        src="/assets/logo.png"
                        width={64}
                        height={64}
                        alt=''
                    />
                </LinkScroll>
                <div className='mbile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block'>
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Nav
                                        href={link.path}
                                        title={link.title}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar