import React from 'react'
import NavLink from './Navlink'
import Image from 'next/image'
import Link from 'next/link'

const MenuOverlay = ({ links }) => {
  return (
    <div className='menu bg-background'>
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
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
            />
        </Link>
        <Link
            href="/github.com"
        >
            <Image
                src="/assets/github.png"
                width={48}
                height={48}
            />
        </Link>
        <Link
            href="/github.com"
        >
            <Image
                src="/assets/github.png"
                width={48}
                height={48}
            />
        </Link>
      </li>
    </ul>
</div>
  )
}

export default MenuOverlay