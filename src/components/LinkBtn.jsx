import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineExternalLink} from 'react-icons/hi'

function LinkBtn({repo, link}) {
  return (
    <div className='flex gap-3'>
        <a className='flex border rounded py-1 px-2 border-black shadow-xl items-center gap-2 font-semibold hover:scale-110 transition scale' href={repo} target="_blank" rel="noreferrer">Code <span className='text-[1.35rem]'><BsGithub /></span></a>
        <a className='flex border rounded py-1 px-2 border-black shadow-xl items-center gap-2 font-semibold hover:scale-110 transition scale' href={link} target="_blank" rel="noreferrer">Live Demo <span className='text-2xl'><HiOutlineExternalLink /></span></a>
    </div>
  )
}

export default LinkBtn