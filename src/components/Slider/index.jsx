
import React from 'react'
import { userComments } from '../../const/const';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function CommentSlider() {
    return (
        <div className='w-full mb-10'>
            <Swiper
                className='w-5/6 p-10'

                modules={[Autoplay]}
                spaceBetween={150}
                //slidesPerView SwiperSlide sayısına göre çalışıyor fakat map ile dönmemize rağmen 1 tane olarak algılıyor sanırsam. Bu yüzden ekranda görünecek resim sayısı ayarlanmıyor.
                slidesPerView={3}
                slidesPerGroup={3}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,

                }}

            >

                {userComments && userComments.map((card) => (

                    <SwiperSlide key={card._id} className=' bg-[#fbfbfb] rounded-3xl shadow-lg  flex justify-center  py-10 px-2'>
                        <div className='max-w-[90%] flex  flex-col items-center text-justify gap-y-10  break-words'>
                            <span className='font-ubuntu '>"{card.comment}"</span>
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-start font-poppins font-semibold text-base text-[color:var(--color-base-secondary)]'>
                                        <span>{card.name}</span>
                                        <span>{card.title}</span>
                                    </div>
                                    <div className=' w-14 rounded-full overflow-hidden'>
                                        <img className='w-full h-14 object-cover' src={card.image} />

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
