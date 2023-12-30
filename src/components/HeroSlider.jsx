import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img1,
    btnTxt: 'Room & Suits',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img2,
    btnTxt: 'Room & Suits',
  },
  {
    title: 'Your Luxury Hotel For Vacation',
    bg: Img3,
    btnTxt: 'Room & Suits',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Autoplay, EffectFade]}
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <SwiperSlide
            key={index}
            className='h-full relative flex justify-center items-center'>
            <div className='z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center'>
              <div className='uppercase text-white font-tertiary tracking-[6px]'>
                Just enjoy and relax
              </div>
              <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                {title}
              </h1>
            </div>

            <div className='absolute top-0 w-full h-full'>
              <img
                className='object-cover h-full w-full'
                src={bg}
                alt=''
              />
            </div>

            {/* overlay */}
            <div className='z-40 absolute top-0 w-full h-full bg-black/70'></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
