import React from 'react'
import Project from './Project'
import data from '../data/projectDetails'

function Projects() {
  return (
    <div className='mx-[7%] lg:mx-[8%] mt-16' id='portfolio'>
      <h2 className='text-3xl uppercase my-3'>Portfolio </h2>
        {data.map(el => <Project data={el} key={el.id} />)}
    </div>
  )
}

export default Projects