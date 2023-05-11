import React from 'react'
import img from '../assets/img.jpg'
import ContactIcon from './ContactIcon'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center md:justify-evenly max-w-3xl md:mx-auto gap-12 mt-10 mb-12' id='about'>
        <div className="text-center">
          <div className="text">
            <h1 className='text-3xl md:text-5xl font-semibold md:leading-snug'>Hi I'm Karan,</h1>
            <h1 className='text-3xl md:text-5xl font-semibold md:leading-snug'>Full Stack</h1>
            <h1 className='text-3xl md:text-5xl font-semibold md:leading-snug'>Web Developer</h1>
          </div>
          <span className='block mt-6'><ContactIcon /></span>
        </div>
        <div className="img w-[12rem] md:w-[14rem] rounded-full overflow-hidden ">
            <img src={img} alt="karan chauhan" />
        </div>
    </div>
  )
}

export default Hero