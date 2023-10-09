import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'

const MenuOverlay = ({ links }) => {
  return (
    <div className='menu bg-background'>
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <Nav href={link.path} title={link.title} />
        </li>
      ))}
      <li className='mt-4 flex gap-4'>
        <Link
            href="/github.com"
        >
            <Image
                src="/assets/github.png"
                width={48}
                height={48}
                alt=''
            />
        </Link>
        <Link
            href="/github.com"
        >
            <Image
                src="/assets/github.png"
                width={48}
                height={48}
                alt=''
            />
        </Link>
        <Link
            href="/github.com"
        >
            <Image
                src="/assets/github.png"
                width={48}
                height={48}
                alt=''
            />
        </Link>
      </li>
    </ul>
</div>
  )
}

export default MenuOverlay