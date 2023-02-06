import React from 'react'
import Shoreline from '../assets/shoreline.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen bg-[#027E72] py-5'>
        <h1 className='text-amber-200 text-4xl mt-24 underline flex justify-center pb-10'>Projects</h1>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">


    <div className='relative group container shadow-lg rounded-lg overflow-hidden'>
      <div className='flex justify-start'>
      <img src={Shoreline}
          className="w-full align-middle h-full hover:scale-125 duration-500 transition-all ease-in-out" />
      <h1 className='absolute text-2xl text-white p-2'>Canada</h1>
      </div>
    </div>


    <div className='relative group container shadow-lg rounded-lg overflow-hidden'>
      <div className='flex justify-start'>
      <img src={Shoreline}
          className="w-full align-middle h-full hover:scale-125 duration-500 transition-all ease-in-out" />
      <h1 className='absolute text-2xl text-white p-2'>Canada</h1>
      </div>
    </div>


    <div className='relative group container shadow-lg rounded-lg overflow-hidden'>
      <div className='flex justify-start'>
      <img src={Shoreline}
          className="w-full align-middle h-full hover:scale-125 duration-500 transition-all ease-in-out" />
      <h1 className='absolute text-2xl text-white p-2'>Canada</h1>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Projects