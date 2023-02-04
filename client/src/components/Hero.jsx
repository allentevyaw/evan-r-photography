import React from 'react'

const Hero = () => {
  return (
    <div name='home' className='flex justify-center items-center bg-shoreline bg-fixed w-full min-h-screen'>

        {/* <div className='mx-10'>
            <h1 className='py-4 font-fleur-de text-5xl font-thin text-amber-200'>Evan D. Rios</h1>
            <h1 className='text-6xl font-source-pro'>PHOTOGRAPHER
            <span className='text-amber-200'>.</span> VIDEOGRAPHER<span className='text-amber-200'>.</span></h1>
            <p className='py-4'>
            Welcome to my photography and videography world! I am Evan Rios, an experienced artist with a passion for capturing life's precious moments. From weddings, headshots to erotic photos, I have a keen eye for detail and a unique style that sets me apart.
            </p>
        </div> */}


<div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center">
        <div 
        className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
        style={{background: "hsla(0, 0%, 100%, 0.3)", backdropfilter: "blur(30px)"}}>
        <h1 className='py-4 font-fleur-de text-5xl font-thin text-amber-200'>Evan D. Rios</h1>
            <h1 className='sm:text-6xl text-3xl font-source-pro'>PHOTOGRAPHER
            <span className='text-amber-200'>.</span> VIDEOGRAPHER<span className='text-amber-200'>.</span></h1>
            <p className='py-4 text-amber-200'>
            Welcome to my photography and videography world! I am Evan Rios, an experienced artist with a passion for capturing life's precious moments. From weddings, headshots to erotic photos, I have a keen eye for detail and a unique style that sets me apart.
            </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero