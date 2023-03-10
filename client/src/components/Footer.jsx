import React from 'react'
import {AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='bg-[#027E72]'>
        <h1 className='flex justify-center pt-5 text-amber-200'>Let's Make Magic</h1>
        <ul className='flex justify-center items-center w-full my-4 text-2xl hover:text-gray-400 m-0'>
            <li className='hover:text-amber-200 hover:text-3xl duration-200'>
                <a href='/'>
                    <AiOutlineInstagram />
                </a>
            </li>
            <li className='px-4 hover:text-amber-200 hover:text-3xl duration-200'>
                <a href='/'>
                    <AiOutlineMail />
                </a>
            </li>
            <li className='hover:text-amber-200 hover:text-3xl duration-200'>
                <a href='/'>
                   <AiOutlineTwitter /> 
                </a>
            </li>
        </ul>

    </div>
  )
}

export default Footer