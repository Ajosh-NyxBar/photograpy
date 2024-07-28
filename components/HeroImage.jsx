import Image from 'next/image'
import React from 'react'

const HeroImage = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image 
      src={imgSrc} fill priority
      alt=''
      />
    </div>
  )
}

export default HeroImage
