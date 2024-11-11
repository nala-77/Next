import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface aboutMiniCardProps {
    image: string | StaticImageData,
    head: string
}

const AboutMiniCard = ({image, head} : aboutMiniCardProps) => {
  return (
    <div className='bg-[#FFFFFF4D] flex flex-col justify-center  items-center max-1187:px-3 p-30 rounded-3xl gap-[15px] min-h-[189px] w-[21%] max-858:w-[300px]'>
        <Image src={image} alt={head} width={60} height={60}/>

        <h4 className='max-1187:text-lg text-center text-xl font-semibold'>
            {head}
        </h4>
    </div>
  )
}

export default AboutMiniCard