import React from 'react'
import {AiOutlinePhone, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center px-10 bg-gray-800'>
        <div>
            <div className='pb-4'>
            <h1 className='py-4 text-amber-200 text-4xl underline'>Contact</h1>
            <p>Thank you for visiting my website. I invite you to explore my portfolio and see for yourself the magic I can create. Let's work together to capture your special moments and make them into timeless memories.</p>
            </div>

            {/* <div className='pt-10 flex justify-between'>

                <div className='flex items-center justify-center pb-10'>
                    <img 
                    src='' 
                    alt='selfie'
                    className='' />
                </div>

                <form className='flex flex-col max-w-[600px] w-full'>

                    <label className='mx-2 text-amber-200'>Name*</label>
                    <input 
                    type='text'
                    placeholder='First Name'
                    name='name'
                    className='rounded-md m-2 p-1 text-gray-600 bg-[#EDEAEA]'>
                    </input>

                    <input 
                    type='text'
                    placeholder='Last Name'
                    name='name'
                    className='rounded-md m-2 p-1 text-gray-600 bg-[#EDEAEA]'>
                    </input>

                    <label className='mx-2 pt-2 text-amber-200'>Email*</label>
                    <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    className='rounded-md m-2 p-1 text-gray-600 bg-[#EDEAEA]'>
                    </input>

                    <label className='mx-2 pt-2 text-amber-200'>Message*</label>
                    <textarea 
                        className='bg-[#EDEAEA] m-2 p-2 rounded-md text-gray-600' 
                        name='message' 
                        rows='9' 
                        placeholder='Message'>
                    </textarea>

                    <button 
                    className='text-white border-2 hover:text-gray-800 hover:bg-red-300 hover:border-red-300 p-3 my-6 mx-auto flex items-center rounded-md'
                    >Submit
                    </button>


                </form>
            </div> */}




        {/* <div className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{backgroundposition: "50%", backgroundimage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: "300px"}}>
    </div> */}


<div className="container text-gray-800 px-4 md:px-12">
      <div className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
        style={{background: "hsla(0, 0%, 100%, 0.8)", }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
          <div className="mb-12 lg:mb-0 text-center mx-auto">
            <AiOutlineInstagram className="w-8 h-8 text-blue-600 mb-6 mx-auto"/>
            <h6 className="font-medium">Instagram</h6>
          </div>
          <div className="mb-12 lg:mb-0 text-center mx-auto">
            <FaMapMarkerAlt className="w-8 h-8 text-blue-600 mb-6 mx-auto"/>
            <h6 className="font-medium">Rhode Island</h6>
          </div>
          <div className="mb-6 md:mb-0 text-center mx-auto">
            <AiOutlinePhone 
            className="w-8 h-8 text-blue-600 mb-6 mx-auto"/>
            <h6 className="font-medium">Phone Number</h6>
          </div>
          <div className="text-center mx-auto">
            <AiOutlineMail 
            className="w-8 h-8 text-blue-600 mb-6 mx-auto"/>
            <h6 className="font-medium">Email</h6>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto">
          <form>
            <div className="form-group mb-6">
              <input type="text" className="block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Name"/>
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"/>
            </div>
            <div className="mb-6">
              <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " rows="3" placeholder="Message"></textarea>
            </div>
            <div className=" text-center mb-6">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"/>
              <label className="inline-block text-gray-800">Send me a copy of this
                message</label>
            </div>
            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
          </form>
        </div>
      </div>
    </div>



    </div>

    </div>
  )
}

export default Contact