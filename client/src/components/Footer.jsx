import React from 'react'
import {AiOutlineInstagram, AiOutlineMail, AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <div>
        <ul className='flex justify-center items-center w-full my-4 text-2xl'>
            <li className='hover:text-red-300 hover:text-3xl duration-200'>
                <a href='/'>
                    <AiOutlineInstagram />
                </a>
            </li>
            <li className='px-4 hover:text-red-300 hover:text-3xl duration-200'>
                <a href='/'>
                    <AiOutlineMail />
                </a>
            </li>
            <li className='hover:text-red-300 hover:text-3xl duration-200'>
                <a href='/'>
                   <AiOutlineTwitter /> 
                </a>
            </li>
        </ul>

    </div>
  )
}

export default Footer