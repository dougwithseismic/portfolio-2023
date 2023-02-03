import React from 'react'
// import { RightArrow } from './RightArrow'

const MasonCard: React.FC<CardProps> = ({
  colSpan,
  bgColor,
  textColor,
  height,
}) => {
  const heightClass = `md:h-[${height}]`
  const textColorClass = `text-[${textColor}]`
  const bgColorClass = `bg-[${bgColor}]`
  const colSpanClass = `col-span-[${colSpan}]`

  return (
    <div
      className={`card w-full flex flex-col justify-between ${heightClass} ${colSpanClass} ${textColorClass} rounded-3xl ${bgColorClass} p-10`}
    >
      <div className='row'>
        <h5 className='mb-4 font-semibold text-22px'>Shortcuts</h5>
        <p className={textColorClass}>
          Copy, paste, create a new item. Access your command line any time.
        </p>
      </div>
      <div className='flex items-center justify-between gap-2 py-4 border-b row'>
        <div className='text'>Read about shortcuts</div>
        {/* <RightArrow stroke={textColor} /> */}
      </div>
    </div>
  )
}

export default MasonCard

// Types
export type CardProps = {
  colSpan: 'full' | '4' | '8'
  bgColor: string
  textColor: string
  height: string
}
