import React from 'react'

const Hero = () => {
  return (
    <div className="hero h-[600px] px-0 w-full bg-[url('/slide1.png')]">
      <div className='hero-overlay bg-opacity-20'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-lg' >
          <h4 className='mb-5 text-3xl text-white font-lato' >Shop the essentials and the extras, all in one place.
          </h4>
          <label className="input input-bordered flex items-center gap-2">
             <input type="text" className="grow" placeholder="What are you looking for?" />
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
      </div>
     
     
    </div>
  )
}

export default Hero
