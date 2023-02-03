import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RightArrow } from 'src/pages'
import Link from 'next/link'

type Props = {
  alt: string
  href: string
  title: string
  imgSrc: string
}

const PortfolioCard: React.FC<Props> = ({ title, imgSrc, alt, href }) => (
  <Link href={href} className='min-h-fit'>
    <div className='flex flex-col items-center my-4 md:max-w-6xl'>
      <div className='peer overflow-hidden rounded-xl flex items-center shadow-[0px_48px_64px_24px_#0000001A]'>
        <motion.div
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 1.7 }}
          className='cursor-pointer image-container'
        >
          <Image
            alt={alt}
            width={1200}
            height={600}
            src={imgSrc}
            className='image'
          />
        </motion.div>
      </div>
      <motion.div className='flex items-center justify-end w-full gap-2 my-2  font-bold tracking-tight transition-opacity md:opacity-0 duration-[2.3s] peer-hover:opacity-100 text-medium text-right'>
        {title} <RightArrow stroke={'black'} />
      </motion.div>
    </div>
  </Link>
)

export default PortfolioCard
