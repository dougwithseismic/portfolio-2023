import React from 'react'
// @ts-ignore
import * as HoverCard from '@radix-ui/react-hover-card'
import Image from 'next/image'

const RadixHoverCard = () => (
  <HoverCard.Root openDelay={100}>
    <HoverCard.Trigger asChild>
      <a
        className='flex gap-2'
        href='https://twitter.com/radix_ui'
        target='_blank'
        rel='noreferrer noopener'>
        <Image
          width={32}
          height={32}
          src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_200x200.png'
          alt='Radix UI'
          className='border-2 rounded-full border-gothamBlack-600 aspect-square'
        />
        Radix UI
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content className='p-4 rounded-md shadow-md bg-gothamBlack-700' sideOffset={5}>
        <div className='flex gap-4'>
          <img
            className='w-16 h-16 rounded-full aspect-square'
            src='https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png'
            alt='Radix UI'
          />
          <div className='flex flex-col md:max-w-sm'>
            <div>
              <div className='font-bold text-white'>Radix</div>
              <a href='https://radix-ui.com' className='Text faded'>radix-ui.com</a>
            </div>
            <div className='Text'>
              Components, icons, colors, and templates for building high-quality, accessible UI.
              Free and open-source.
            </div>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
)

export default RadixHoverCard
