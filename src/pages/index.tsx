import Layout from '@components/Layout'
import TestimonialCard from '@components/TestimonialCard'
import Image from 'next/image'

const RightArrow = ({ ...props }) => (
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
      stroke-width='1.33333'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M8.4375 3.33325L13.1042 7.99992L8.4375 12.6666'
      stroke-width='1.33333'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)

const Home = () => {
  return (
    <Layout>
      <section className='text-white bg-black bg-no-repeat bg-cover'>
        <div className='container md:px-16 pt-[96px] py-8 md:py-48  flex flex-col items-center md:max-w-[800px]'>
          <div className='flex my-6 items-center font-bold border-white justify-between px-4 border-2 rounded-full pill h-[36px] '>
            New year, new site! <RightArrow stroke={'white'} />
          </div>
          <div className='flex flex-col items-center gap-4 text-center row'>
            <h1 className='font-bold text-[48px] tracking-tight leading-[48px] md:text-[72px] md:leading-[72px] my-2 md:my-4'>
              The fullstack web agency for brands that get it.
            </h1>
            <span className='text-[16px] md:text-[20px] leading-[32px]  font-medium text-[#ffffff90] '>
              In-house entrepreneurs and digital natives building brands and
              products that matter.
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
            <div className='flex flex-col items-center my-4 md:max-w-6xl'>
              <div className='overflow-hidden rounded-xl max-h-[600px] flex items-center shadow-[0px_48px_64px_24px_#0000001A]'>
                <Image
                  alt='CHANGE_ME'
                  width={1200}
                  height={600}
                  src='/images/better-beer.webp'
                  className=' image'
                />
              </div>
              <div className='flex items-center w-full gap-2 my-2 font-bold tracking-tight text-medium label'>
                BetterBeer 2022 MicroSite <RightArrow stroke={'black'} />
              </div>
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
                      Thanks to them, our product-led growth has been exponential.
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
    </Layout>
  )
}

export default Home
