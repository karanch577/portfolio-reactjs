import React from 'react'
import { GrMail } from 'react-icons/gr'
import { FcCallback } from 'react-icons/fc'

function Contact() {
  return (
    <div className='mx-[7%] lg:mx-[8%] mt-16' id='contact'>
        <h2 className='text-2xl uppercase mt-3'>Contact</h2>
        <h3 className='font-semibold text-lg mt-2'>Wanna work with me! Hit me up! 👇</h3>
        <div className="details flex flex-col sm:flex-row items-center gap-9 mt-10">
            <div className="card  flex items-center gap-3 text-2xl">
                <div className="icon">
                    <GrMail />
                </div>
                <a href="mailto:karandemo577@gmail.com">karandemo577@gmail.com</a>
            </div>
            <div className="card  flex items-center gap-3 text-2xl">
                <div className="iconr">
                    <FcCallback />
                </div>
                <a href="tel:+917635948095">+91-7635948095</a>
            </div>
        </div>
    </div>
  )
}

export default Contact