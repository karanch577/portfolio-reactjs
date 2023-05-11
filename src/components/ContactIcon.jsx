import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'


function ContactIcon() {
  return (
    <>
        <div className="icons flex items-center gap-3 text-[1.7rem] justify-center md:justify-start">
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/karan-chauhan-767728242"><BsLinkedin /></a>
            <a target="_blank" rel='noreferrer' href="https://github.com/karanch577"><BsGithub /></a>
          </div>
    </>
  )
}

export default ContactIcon