import React from 'react'

type TestimonialCardProps = {
  content: string | JSX.Element
  name: string | JSX.Element
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  const { content, name, className = '' } = props

  return (
    <div
      className={`card md:min-h-[520px] md:max-w-[380px] flex flex-col justify-between border-[#EFF0F2] border-2 rounded-3xl p-4 md:p-[42px] font-semibold text-2xl leading-[35px] ${className}`}
    >
      <div className='content text-[#A1A1AA] '>{content}</div>
      <div className='name text-[18px] mt-4'>{name}</div>
    </div>
  )
}


export default TestimonialCard
