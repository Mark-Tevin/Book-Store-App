import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-purple-700'>for the Best Prices</span></h2>
                <p className='md:w-4/5'>Whether you're looking to declutter your shelves or find rare first editions, our platform offers a convenient and secure way to buy and sell books online. Enjoy competitive prices, fast shipping, and a wide selection of titles. Start exploring our collection today and find the perfect books for your reading pleasure.</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-900 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner