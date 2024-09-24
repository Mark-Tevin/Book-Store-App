import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// react icons
import {FaStar} from "react-icons/fa6"
import { Avatar } from 'flowbite-react';
import ProPic from "../assets/profile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-14'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>I've been a loyal customer at this bookstore for years and I've always been impressed by their wide selection of books, from classic literature to the latest bestsellers. The staff is incredibly knowledgeable and always happy to offer recommendations. I recently purchased a rare first edition I'd been searching for, and I couldn't be happier with the price and condition. Highly recommend!</p>
                    <Avatar
                        alt="avatar of Jese"
                        img={ProPic}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium'>James jason</h5>
                    <p className='text-base'>Author </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Duka hili la vitabu ni nzuri sana! Wana uteuzi mpana wa vitabu, nimepata kitabu cha nadra ambacho nimekuwa nikitafuta kwa miaka mingi. Napendekeza sana!</p>
                    <Avatar
                        alt="avatar of Jese"
                        img={ProPic}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Ateya Vincent</h5>
                    <p className='text-base'>Mwalimu </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Duka ya vitabu hii ni fire! Wana vitabu nyingi na za kuvutia. Nilipata kitabu cha science fiction nilikuwa nikitafuta kwa muda mrefu</p>
                    <Avatar
                        alt="avatar of Jese"
                        img={ProPic}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Mwangi paul</h5>
                    <p className='text-base'>Reader </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>I've been a frequent visitor to this amazing bookstore! Their selection is top-notch, and the staff is always helpful and knowledgeable. I recently found a rare first edition I'd been searching for for years. Highly recommended!</p>
                    <Avatar
                        alt="avatar of Jese"
                        img={ProPic}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Ken walibora</h5>
                    <p className='text-base'>Award winning, Author </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Excellent selection of books and friendly staff. Always find great reads here!?</p>
                    <Avatar
                        alt="avatar of Jese"
                        img={ProPic}
                        rounded
                        className='w-10 mb-4'
                    />
                    <h5 className='text-lg font-medium'>Tevin</h5>
                    <p className='text-base'>reader </p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Review