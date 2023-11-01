'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards as Effect, Autoplay } from 'swiper/modules';
import { Character } from '@/core/interfaces/AllCharacters';

interface IProps {
  characters: Character[]
}

const EffectCards = ({characters}:IProps) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      autoplay
      modules={[Effect, Autoplay]}
      className="swiper-effect"
    >
      {characters?.map((item, index) => (
        <SwiperSlide className='swiper-slide-effect' key={index}>
          <div className='h-full w-full bg-no-repeat bg-contain' style={{backgroundImage: `url('${item?.images[0]}')`}}>
            <div>
              <p>{item.name}</p>
              <p>{item.natureType}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default EffectCards