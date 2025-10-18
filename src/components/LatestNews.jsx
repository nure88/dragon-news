import React from 'react'
import Marquee, {} from "react-fast-marquee"
const LatestNews = () => {
  return (
    <div className='flex items-center gap-x-3 px-3 justify-center'>
        <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
        <Marquee className='flex gap-5' pauseOnHover={true} speed={90} delay={4}>

        <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat?</p>
           <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat?</p>
              <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, repellat?</p>
        </Marquee>
    </div>
  )
}

export default LatestNews