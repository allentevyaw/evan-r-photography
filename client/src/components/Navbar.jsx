import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

const [shadow, setshadow] = useState(false)

useEffect(() => {
    const handleShadow = () => {
        if (window.scrollY >= 90) {
            setshadow(true)
        } else {
            setshadow(false)
        }
    }
    window.addEventListener('scroll', handleShadow)
}, [])

  return (
    <div className={shadow ? 'fixed flex shadow-md justify-between items-center w-full h-[80px] px-5 z-[100] font-bold bg-[#0f161a]'
: 'fixed flex justify-between items-center w-full h-[80px] px-5 z-[100] font-bold bg-[#0f161a]'}>
        <button className='hover:text-red-300'>
            <Link to="home" smooth={true} duration={500}>
                Evan Rios
            </Link>
        </button>

        <div>
            <ul className='flex justify-between'>
                <Link to='about' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-red-300 link link-underline'>About</li>
                </Link>
                <Link to='projects' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-red-300 link link-underline'>Projects</li>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-red-300 link link-underline'>Contact</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar