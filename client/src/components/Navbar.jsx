import React, {useState} from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-[80px] px-5 z-[100] font-bold'>
        <button className='hover:text-red-300'>
            Evan Rios
        </button>

        <div>
            <ul className='flex justify-between'>
                <Link>
                    <li className='px-4 cursor-pointer hover:text-red-300'>About</li>
                </Link>
                <Link>
                    <li className='px-4 cursor-pointer hover:text-red-300'>Projects</li>
                </Link>
                <Link>
                    <li className='px-4 cursor-pointer hover:text-red-300'>Contact</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar