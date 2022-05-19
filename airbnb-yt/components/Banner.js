import React from 'react'
import Image from 'next/image';

function Banner() {
  return (
    <div  className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" >
      <Image
      src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" 
      layout="fill"
      objectFit="cover"/>
      <div className="absolute top-1/2 w-full text-center">
          <p className="text-sm text-white sm:text-lg">Not sure where to go? perfect</p>
          <button className="text-purple-500 bg-white
          px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
          active:scale-90 transition duration-150 ">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner
