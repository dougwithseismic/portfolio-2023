import { Menu } from 'lucide-react'
import React from 'react'

const LogoIcon = () => (
  <svg
    width='38'
    height='24'
    viewBox='0 0 38 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M24.385 12.4268C24.385 18.7668 19.141 23.9058 12.673 23.9058C6.20396 23.9058 0.959961 18.7668 0.959961 12.4268C0.959961 6.08678 6.20296 0.946777 12.673 0.946777C19.141 0.946777 24.385 6.08678 24.385 12.4268Z'
      fill='white'
      fill-opacity='0.3'
    />
    <path
      d='M37.0158 12.4268C37.0158 18.7668 31.8228 23.9058 25.4178 23.9058C19.0128 23.9058 13.8208 18.7668 13.8208 12.4268C13.8208 6.08678 19.0118 0.946777 25.4178 0.946777C31.8228 0.946777 37.0158 6.08678 37.0158 12.4268Z'
      fill='white'
    />
  </svg>
)

const MenuIcon = () => (
  <svg
    height='24'
    width='24'
    fill='white'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75V7.25ZM17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM7 15.25C6.58579 15.25 6.25 15.5858 6.25 16C6.25 16.4142 6.58579 16.75 7 16.75V15.25ZM17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25V16.75ZM7 8.75H17V7.25H7V8.75ZM7 12.75H17V11.25H7V12.75ZM7 16.75H17V15.25H7V16.75Z' />
  </svg>
)

export const Navigation = () => {
  return (
    <header className='h-[72px] flex absolute top-0 left-0 w-full p-4 border-b border-gothamBlack-700 ring-0'>
      <div className='flex items-center justify-between flex-1 mobile md:hidden'>
        <div className='col'>
          <LogoIcon />
        </div>

        <div className=''>
          <MenuIcon />
        </div>
      </div>

      <div className='container items-center justify-between flex-1 hidden mobile md:flex'>
        <div className='col'>
          <LogoIcon />
        </div>

        <div className='flex items-center gap-2 text-white button-group'>
          <button className='btn btn-opacity h-[48px] px-4'>
            View Portfolio
          </button>
          <button className='btn btn-outline h-[48px] px-4'>Contact Us</button>
        </div>
      </div>
    </header>
  )
}
