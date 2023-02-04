import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa';



const Navbar = () => {

//Variables
const [navbar, setnavbar] = useState(false)
const [shadow, setshadow] = useState(false)

//Logic
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

const onClick = () => {
    setnavbar((prevState) => !prevState)
}

//Display
  return (
    <div className={shadow ? 'fixed flex shadow-md justify-between items-center w-full h-[80px] px-5 z-[100] font-bold bg-[#027E72]'
: 'fixed flex justify-between items-center w-full h-[80px] px-5 z-[100] font-bold bg-[#027E72]'}>
        <button className='hover:text-amber-200'>
            <Link to="home" smooth={true} duration={500}>
                Evan R.
            </Link>
        </button>
<div>
        <div>
            <ul className='sm:flex hidden'>
                <Link to='about' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-amber-200 link-underline'>About</li>
                </Link>
                <Link to='projects' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-amber-200 link-underline'>Projects</li>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <li className='px-4 cursor-pointer hover:text-amber-200 link-underline'>Contact</li>
                </Link>
            </ul>
        </div>

    <div>
        <FaBars 
            onClick={onClick}
            className='sm:hidden'/>
    </div>

    <div>
        
    </div>


</div>
</div>
  )
}

export default Navbar