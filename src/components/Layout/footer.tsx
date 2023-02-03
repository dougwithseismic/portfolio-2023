import React from 'react'

export const Footer = () => {
  return (
    <footer className='text-white bg-black'>
      <div className='container'>
        <div className='flex flex-col items-center gap-8 border-b border-[#1a1a1a] row  py-32'>
          <div className='max-w-xl mx-auto row'>
            <h5 className='text-[56px] leading-tight text-center'>
              Ready to take Seismic for a spin?
            </h5>
          </div>
          {/* Buttons */}
          <div className='flex flex-col w-full gap-4 my-4 md:w-auto md:flex-row'>
            <button className='btn btn-opacity'>View Portfolio</button>
            <button className='btn btn-outline'>Start a project</button>
          </div>
        </div>
        {/* Lower */}
        <div className='flex flex-col py-8 font-medium tracking-wide md:justify-between md:flex-row'>
          <div className=''>
            © 2023 Doug Silkstone Digital Consultancy trading as withSeismic.
          </div>
          <div className=''>Powering Brands That Get It.</div>
        </div>
      </div>
    </footer>
  )
}
