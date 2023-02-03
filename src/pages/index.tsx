import { ArticleCard } from '@components/BlogCard'
import Layout from '@components/Layout'
import { motion } from 'framer-motion'
import TestimonialCard from '@components/TestimonialCard'
import Image from 'next/image'
import PortfolioCard from '@components/PortfolioCard'

export const RightArrow = ({ ...props }) => (
  <svg
    width='17'
    height='16'
    viewBox='0 0 17 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M3.77051 8H13.1038'
      strokeWidth='1.33333'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.4375 3.33325L13.1042 7.99992L8.4375 12.6666'
      strokeWidth='1.33333'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const Home = () => {
  return (
    <Layout>
      <section className='text-white bg-black bg-no-repeat'>
        <div className='container md:px-16 pt-[96px] py-8 md:py-48  flex flex-col items-center md:max-w-[960px]'>
          <div className='flex my-6 items-center font-bold border-white justify-between px-4 border-2 rounded-full pill h-[36px] '>
            New year, new site! <RightArrow stroke={'white'} />
          </div>
          <div className='flex flex-col items-center gap-4 text-center row'>
            <h1 className='font-bold text-[48px] tracking-tight leading-[48px] md:text-[72px] md:leading-[72px] my-2 md:my-4'>
              The fullstack web agency powering brands that get it.
            </h1>
            <span className='text-[16px] md:text-[20px] leading-[32px]  font-medium text-[#ffffff90] '>
              Your own in-house entrepreneur army, building modern digital
              businesses ready for the future, scaled using growth engineering
              and product-led growth.
            </span>
            {/* Buttons */}
            <div className='flex flex-col w-full gap-4 my-4 md:w-auto md:flex-row'>
              <button className='btn btn-opacity'>View Portfolio</button>
              <button className='btn btn-outline'>Start a project</button>
            </div>
          </div>
        </div>
      </section>

      {/* White Section */}
      <section>
        <div className='container'>
          <div className='flex flex-col items-center'>
            <h2 className='my-24 text-5xl font-bold leading-tight tracking-tight text-center md:max-w-2xl'>
              We build brands and products that matter.
            </h2>
            <div className='grid gap-4 md:grid-cols-2 flex-nowrap whitespace-nowrap'>
              <PortfolioCard
                title='Better Beer Microsite'
                href='#'
                imgSrc='/images/better-beer.webp'
                alt='Example'
              />
              <PortfolioCard
                title='GetBenson.com - Discount Extension Blocker'
                href='#'
                imgSrc='/images/bg-desktop.webp'
                alt='Example'
              />

            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section>
        <div className='container'>
          <div className='flex flex-col items-center'>
            <h2 className='my-24 text-4xl font-bold leading-tight tracking-tight text-center md:max-w-4xl'>
              Securely connect your entire organization to our fiber network
              with our simple tools. Deploy feels like you've got a digital
              shield - but better.
            </h2>

            <div className='grid gap-4 md:grid-cols-3 card-items'>
              <TestimonialCard
                content={
                  <>
                    "Our startup journey was struggling to take off, until we
                    found Doug and his team at Seismic. They understood what we
                    needed and brought in the best modern developers to help us
                    take off.{' '}
                    <span className='text-black'>
                      Thanks to them, our product-led growth has been
                      exponential.
                    </span>
                    "
                  </>
                }
                name='Doug Silkstone, Team Manager'
              />
              <TestimonialCard
                content={
                  <>
                    "Our startup was struggling to grow until we found this
                    digital agency. They understood what we needed and brought
                    in the best modern developers to help us take off. Thanks to
                    them, our growth has been exponential."
                  </>
                }
                name='John Doe, CEO'
              />
              <TestimonialCard
                content={
                  <>
                    "We were skeptical at first, but this digital agency proved
                    to us that they were the real deal. They brought in the best
                    talent and helped us reach new heights. Our business
                    wouldn't be where it is today without their expertise."
                  </>
                }
                name='Jane Smith, CMO'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section>
        <div className='container my-32'>
          <div className='mx-auto md:max-w-3xl'>
            <span className='text-[#002FFF] font-bold tracking-tight'>
              Intuitive Routing
            </span>
            <h2 className='mx-auto my-4 text-[48px] font-bold leading-tight tracking-tight text-left'>
              Double down on quick access to any documents with no buffering or
              impact on wait times.
            </h2>
            <p className='leading-[35px] font-medium text-[] text-[22px] tracking-tight'>
              Deploy's Super Sonic Security engine combines every
              state-of-the-art security software into one elegant package.
              Everything you need, nothing you don't.
            </p>
          </div>
        </div>
      </section>

      {/* Black */}
      <section className='bg-black'>
        <div className='container py-32 my-16'>
          {/* Intro */}
          <div className='mx-auto text-white md:max-w-5xl'>
            <span className='font-bold tracking-tight'>So many features</span>
            <h2 className='mx-auto my-4 text-[48px] font-bold leading-tight tracking-tight text-left'>
              Get setup in minutes with immediate access to every feature.
            </h2>
          </div>
          {/* Cards Mason */}
          <div className='grid w-full grid-cols-1 my-32 gap-y-4 md:gap-8 md:grid-cols-12 '>
            {/* Card One */}
            <div className='card w-full flex flex-col justify-between md:h-[500px] col-span-full md:col-span-4 text-white rounded-3xl bg-[#1E2020] p-8 md:p-10'>
              <div className='row'>
                <h5 className='mb-4 text-[22px] font-semibold'>Shortcuts</h5>
                <p className='text-white'>
                  Copy, paste, create a new item. Access your command line any
                  time.
                </p>
              </div>
              <div className='flex items-center justify-between gap-2 py-4 border-b row'>
                <div className='text'>Read about shortcuts</div>
                <RightArrow stroke={'white'} />
              </div>
            </div>
            {/* Card Two */}
            <div className='card flex flex-col justify-between  md:h-[500px] col-span-8 text-white rounded-3xl bg-[#171717] p-10'>
              <div className='row'>
                <h5 className='mb-4 text-[22px] font-semibold'>Shortcuts</h5>
                <p className='text-white'>
                  Copy, paste, create a new item. Access your command line any
                  time.
                </p>
              </div>
              <div className='flex items-center justify-between gap-2 py-4 border-b row'>
                <div className='text'>Read about shortcuts</div>
                <RightArrow stroke={'white'} />
              </div>
            </div>
            {/* Card Three */}
            <div className='card flex flex-col justify-between  md:h-[500px] col-span-8 text-white rounded-3xl bg-[transparent] p-10'>
              <div className='row'>
                <h5 className='mb-4 text-[22px] font-semibold'>Shortcuts</h5>
                <p className='text-white'>
                  Copy, paste, create a new item. Access your command line any
                  time.
                </p>
              </div>
              <div className='flex items-center justify-between gap-2 py-4 border-b row'>
                <div className='text'>Read about shortcuts</div>
                <RightArrow stroke={'white'} />
              </div>
            </div>{' '}
            {/* Card Four */}
            <div className='card flex flex-col justify-between  md:h-[500px] col-span-4 text-white rounded-3xl bg-[#1E2020] p-10'>
              {' '}
              <div className='row'>
                <h5 className='mb-4 text-[22px] font-semibold'>Shortcuts</h5>
                <p className='text-white'>
                  Copy, paste, create a new item. Access your command line any
                  time.
                </p>
              </div>
              <div className='flex items-center justify-between gap-2 py-4 border-b row'>
                <div className='text'>Read about shortcuts</div>
                <RightArrow stroke={'white'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogposts */}
      <section>
        <div className='container my-32'>
          <div className='mx-auto my-16 space-y-4 row md:max-w-4xl'>
            <h2 className='text-5xl font-bold leading-tight tracking-tight text-left'>
              We build brands and products that matter.
            </h2>
            <button className='text-white bg-black btn btn-opacity'>
              View all articles
            </button>
          </div>
          <div className='grid gap-8 article-items md:grid-cols-3'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
