import React from 'react'
import LinkBtn from './LinkBtn'
import StackBtn from './StackBtn'

function Project({data}) {
  console.log(data.id)

  function imgClassList(id) {
    return `img sm:w-[80%] lg:w-[50%] h-[230px] xs:h-[300px]  overflow-clip rounded-lg sm:px-12 lg:px-0` + (id % 2 ? ` lg:order-0`: ` lg:order-1`)
  }


  return (
    <div className="project flex flex-col lg:flex-row gap-3 mb-10 mt-9 shadow-2xl rounded-xl items-center p-[0%] justify-around">
    <div className={imgClassList(data.id)}>
        <img className={`hover:translate-y-[calc(-100%+230px)] sm:hover:translate-y-[calc(-100%+300px)] transition-transform ${data.id === `1` ? 'duration-[9s]' : 'duration-[25s]'} ease-in-out min-h-[300px] rounded-lg`} src={data.imgSrc} alt="project" />
    </div>
    {/* info */}
    <div className="desc w-full p-5 lg:w-[40%] text-center">
      <h3 className='text-[1.3rem] uppercase font-semibold mb-6'>{data.name}</h3>
      <p>{data.info}</p>

    {/* techStack */}
    <div className="techStack flex flex-wrap justify-center gap-5 mt-5">
      {data.techStack.length > 0 && data.techStack.map((ele, i) => <StackBtn key={i} data={ele} />)}
    </div>

    {/* Links */}
    <div className="link flex justify-center gap-5 mt-5">
      <LinkBtn repo={data.repo} link={data.liveLink} />
    </div>
    </div>
    </div>

  )
}

export default Project