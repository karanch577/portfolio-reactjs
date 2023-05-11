import React from 'react'

function IconWrapper(props) {
  return (
    <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>{props.children}</div>
  )
}

export default IconWrapper