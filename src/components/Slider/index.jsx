
import React from 'react'
import { userComments } from '../../const/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
export default function CommentSlider() {
    return (
        <div className=' w-full mb-10 '>
            <Swiper
                className=' mySwiper w-5/6 p-10'

                modules={[Autoplay, Pagination]}
                spaceBetween={150}
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {userComments && userComments.map((card) => (
                    <SwiperSlide key={card._id} className=' bg-[color:var(--bg-base-secondary)] rounded-3xl shadow-lg  flex justify-center  py-4  laptop2:px-2 desktop1:px-5 desktop2:px-4'>
                        <div className='max-w-[90%] flex  flex-col items-center text-justify gap-y-14  break-words '>
                            <span className='font-ubuntu text-xs desktop2:text-sm text-[color:var(--color-base)]'>"{card.comment}"</span>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-start font-poppins font-semibold text-sm text-[color:var(--color-base-secondary)]'>
                                        <span>{card.name}</span>
                                        <span>{card.title}</span>
                                    </div>
                                    <div className=' w-11 rounded-full overflow-hidden'>
                                        <img className='w-full h-11 object-cover' src={card.image} />

                                    </div>
                                </div>
                                <div className='text-left'>{card.stars}</div>
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div >
    )
}
