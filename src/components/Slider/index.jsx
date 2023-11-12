import { userComments } from "../../const/const";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CommentSlider() {
  return (
    <div className="w-full mb-10">
      <Swiper
        className="w-5/6 p-10"
        modules={[Autoplay]}
        spaceBetween={40}
        //slidesPerView SwiperSlide sayısına göre çalışıyor fakat map ile dönmemize rağmen 1 tane olarak algılıyor sanırsam. Bu yüzden ekranda görünecek resim sayısı ayarlanmıyor.
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        // autoplay={{
        //     delay: 4000,
        //     disableOnInteraction: false,

        // }}
      >
        {userComments &&
          userComments.map((card) => (
            <SwiperSlide
              key={card._id}
              className=" bg-[color:var(--bg-base-secondary)] rounded-2xl shadow-lg  flex justify-center  px-3 py-6  desktop1:px-5 desktop2:px-4"
            >
              <div className="max-w-[90%] flex  flex-col items-center text-justify gap-y-14  break-words ">
                <span className="font-inter font-medium text-[color:var(--color-base)] leading-5 text-sm desktop2:text-sm">
                  {card.comment}
                </span>
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start font-poppins font-semibold text-sm text-[color:var(--color-base-secondary)]">
                      <span>{card.name}</span>
                      <span>{card.title}</span>
                    </div>
                    <div className=" w-11 rounded-full overflow-hidden">
                      <img
                        className="w-full h-11 object-cover"
                        src={card.image}
                      />
                    </div>
                  </div>
                  <div className="text-left">{card.stars}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      
    </div>
  );
}
