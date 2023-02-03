import RadixHoverCard from '@components/demo/RadixHoverCard/RadixHoverCard'
import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'

function FeatureBlock({
  children,
  title = 'Default Title'
}: {
  title: string | React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className='flex flex-col border-[1px] border-gothamBlack-700 p-8 min-h-[320px]'>
      <h3>{title}</h3>
      <div className='flex flex-col h-full gap-4'>{children}</div>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Next-2023 :: Your Next Template</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container'>
        <div className='mb-12 row'>
          <h1>Next 2023.</h1>
          <h2>Modern React for Modern Developers.</h2>
          <ul className='flex gap-4 my-4'>
            <ListItem link='https://nextjs.org' text='Next.js' />
            <ListItem link='https://www.typescriptlang.org/' text='TypeScript' />
            <ListItem link='https://reactjs.org/docs/hooks-intro.html' text='React Hooks' />
            <ListItem link='https://tailwindcss.com/' text='Tailwind CSS' />
            <ListItem link='https://framer.com/motion' text='Framer Motion' />
          </ul>
          <a className='text-lg text-white' href='https://twitter.com/dougiesilkstone'>
            @dougiesilkstone
          </a>
        </div>

        <h2 className='my-4'>Features</h2>

        <div className='grid gap-4 md:grid-cols-3'>
          <FeatureBlock title='Tailwind Component Library'>
            <p>
              Tailwind makes developers fast, fluid and responsive, but when working in teams
              with different experiences, it can be tough to onboard and get up to speed.
            </p>
            <p>
              Change <code>@styles/globals.scss</code> to edit the look and feel of these
              buttons with tailwind and scss combined.
            </p>
            <div className='flex justify-end gap-2 mt-auto justify-self-end'>
              <button className='btn-primary'>Primary Button Components</button>
              <button className='btn-outline'>For Readable JSX</button>
            </div>
          </FeatureBlock>
          <FeatureBlock
            title={
              <div className='flex items-center gap-2'>
                <RadixHoverCard />
              </div>
            }>
            <>
              <p>
                Unstyled, accessible components for building high‑quality design systems and web
                apps in React
              </p>
              <p>
                Radix is a collection of unstyled, accessible components for building
                high‑quality design systems and web apps in React. Radix is built on top of
                React primitives, which means it’s fully compatible with Tailwind, so you can
                move fast af.
              </p>
              <a
                className='self-end mt-auto'
                target={'_blank'}
                rel='noopener noreferrer'
                href='https://www.radix-ui.com/docs/primitives/overview/getting-started'>
                <button className='btn-primary'>Getting Started with Radix</button>
              </a>
            </>
          </FeatureBlock>
          <FeatureBlock title='Framer Motion'>
            <p>
              Framer Motion is a production-ready motion library for React that allows you to
              build complex, fluid and beautiful animations with ease.
            </p>
            <motion.div
              id='square'
              animate={{
                x: ['20%', '100%', '0%', '70%', '20%'],
                y: [0, 100, 0],

                rotate: [0, 270, 0, 1080, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                backgroundColor: ['#ff008c', '#d309e1', '#9c1aff', '#7700ff', '#ff008c'],

                transition: { repeat: Infinity, ease: 'easeInOut', duration: 10 }
              }}
              className='flex items-center justify-center w-20 h-20 rounded-md bg-gothamBlack-500'>
              <motion.div
                className='w-10 h-10 bg-black rounded-full'
                animate={{
                  x: ['0%', '360%', '0%'],
                  backgroundColor: ['#d309e1', '#ff008c', '#d309e1'],
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],

                  transition: { repeat: Infinity, ease: 'easeInOut', duration: 6 }
                }}
              />
            </motion.div>
            <a
              className='self-end mt-auto'
              target={'_blank'}
              rel='noopener noreferrer'
              href='https://www.framer.com/motion'>
              <button className='btn-primary'>Framer Motion</button>
            </a>
          </FeatureBlock>
        </div>
      </div>
    </div>
  )
}

const ListItem = ({ link, text }: { link: string; text: string }) => {
  return (
    <li>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    </li>
  )
}

export default Home
