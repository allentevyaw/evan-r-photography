import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen flex justify-center items-center px-10 bg-gray-800'>
        <div>
            <h1 className='py-4 text-red-300 text-4xl underline'>Contact</h1>
            <p>Thank you for visiting my website. I invite you to explore my portfolio and see for yourself the magic I can create. Let's work together to capture your special moments and make them into timeless memories.</p>

            <div className='pt-10 flex justify-between'>

                <div>
                    
                </div>

                <form className='flex flex-col max-w-[600px] w-full'>
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

                  <input 
                    type='email'
                    placeholder='Email'
                    name='email'
                    className='rounded-md m-2 p-1 text-gray-600 bg-[#EDEAEA]'>
                    </input>

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
            </div>

        </div>



    </div>
  )
}

export default Contact