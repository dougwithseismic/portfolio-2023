import Image from 'next/image'
import React from 'react'

export const ArticleCard = () => {
  return (
    <div className='card'>
      <div className='overflow-hidden rounded-xl max-h-[240px] flex items-center shadow-[0px_48px_64px_24px_#0000001A]'>
        <Image
          alt='blog'
          src='/images/better-beer.webp'
          width={600}
          height={400}
        />
      </div>{' '}
      <div className='my-4 row'>
        <h5 className='mb-4 text-[22px] font-semibold'>
          Using Shortcuts in Deploy
        </h5>
        <p className=''>April 8, 2022 • Editorial</p>
      </div>
    </div>
  )
}
