import React from 'react'
import {AiOutlineCamera, AiOutlineVideoCamera, AiFillCamera} from 'react-icons/ai'
import Shoreline from '../assets/shoreline.png'

const About = () => {
  return (
    <div name='about' className='flex justify-center items-centerw-full min-h-screen bg-white'>


<div className="container mx-auto text-center lg:text-left pt-7 pb-7">
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <div className="mb-12 lg:mb-0 ">
          <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-16"
            style={{background: "hsla(0, 0%, 100%, 0.3)", backdropfilter: "blur(30px)"}}>
            <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
            <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
            With years of experience, I am a master of my craft, blending creativity and technical expertise to create stunning works of art. My portfolio speaks for itself, showcasing my versatility and ability to capture the essence of a moment.
            </p>

            <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto text-[#027E72]">
              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
              <AiOutlineCamera />
                Photography
              </p>

              <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
              <AiOutlineVideoCamera />
                Videography
              </p>

              <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                <AiFillCamera />
                Drone Photography
              </p>
            </div>

            <p className="text-gray-500 mb-0">
            <p className='py-4'>As a wedding photographer, I understand the importance 
            of preserving memories and emotions of a couple's special day. I am dedicated 
            to capturing every candid moment, and creating posed portraits that are timeless. 
            For headshots, I bring out the best in my clients, whether they are actors, models or 
            professionals. My goal is to create a headshot that stands out and helps them achieve 
            their goals. Erotic photography is my passion. I believe that every body is unique and 
            beautiful, and I know how to capture the sensuality and eroticism of the human form. Whether 
            you want to capture a special moment or create art that celebrates the beauty of the human 
            form, I am the perfect choice. In addition to my photography expertise, I am also a skilled 
            videographer and drone photographer. I bring the same level of creativity and technical 
            expertise to my videography and drone work, ensuring that every project is captured in 
            stunning detail.</p>
            </p>
          </div>
        </div>

        <div className='px-4'>
          <img 
          src={Shoreline} 
          className="rounded-lg shadow-lg shadow-gray-400 hover:blur-sm"
          alt="" />
        </div>
      </div>
    </div>




    </div>
  )
}

export default About