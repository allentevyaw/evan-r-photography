import React from 'react'
import {AiOutlinePhone, AiOutlineMail, AiOutlineInstagram} from 'react-icons/ai'
import {FaMapMarkerAlt} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center px-10 bg-white py-20'>
        <div>
            <div className='pb-8'>
                <h1 className='py-4 text-black text-4xl '>Contact</h1>
                <p className='text-black'>Thank you for visiting my website. I invite you to explore my portfolio 
                    and see for yourself the magic I can create. Let's work together to 
                    capture your special moments and make them into timeless memories.</p>
            </div>



        {/* <div className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{backgroundposition: "50%", backgroundimage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: "300px"}}>
    </div> */}


<div className="container text-gray-800 px-4 md:px-12 pb-8">
      <div className="block rounded-lg shadow-md shadow-gray-400 py-10 md:py-12 px-4 md:px-6"
        style={{background: "hsla(0, 0%, 100%, 0.8)", }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
          <div className="mb-12 lg:mb-0 text-center mx-auto">
            <AiOutlineInstagram className="w-8 h-8 text-[#027E72] mb-6 mx-auto"/>
            <h6 className="font-medium">Instagram</h6>
          </div>
          <div className="mb-12 lg:mb-0 text-center mx-auto">
            <FaMapMarkerAlt className="w-8 h-8 text-[#027E72] mb-6 mx-auto"/>
            <h6 className="font-medium">Rhode Island</h6>
          </div>
          <div className="mb-6 md:mb-0 text-center mx-auto">
            <AiOutlinePhone 
            className="w-8 h-8 text-[#027E72] mb-6 mx-auto"/>
            <h6 className="font-medium">Phone Number</h6>
          </div>
          <div className="text-center mx-auto">
            <AiOutlineMail 
            className="w-8 h-8 text-[#027E72] mb-6 mx-auto"/>
            <h6 className="font-medium">Email</h6>
          </div>
        </div>
        <div className="max-w-[700px] mx-auto">
          <form>
            <div className="form-group mb-6">
                <label className='pl-2'>Name*</label>
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
              focus:text-gray-700 focus:bg-white focus:border-[#027E72] focus:outline-none"
                placeholder="Name"/>
            </div>
            <div className="form-group mb-6">
            <label className='pl-2'>Email*</label>
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
            <label className='pl-2'>Message*</label>

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
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm
                 bg-white checked:bg-[#027E72] checked:border-[#027E72] focus:outline-none 
                 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 
                 cursor-pointer"/>
              <label className="inline-block text-gray-800">Send me a copy of this
                message</label>
            </div>
            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-[#027E72]
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-[#027e72a9] hover:shadow-lg
            focus:bg-[#027e72a9] focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-[#027e72] active:shadow-lg
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