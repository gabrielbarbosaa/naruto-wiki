"use client"
import React, { useRef, useState } from 'react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

const SlideHome = () => {
  return (
    <Swiper
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        data-swiper-parallax="-15%"
      ></div>
      <SwiperSlide>
        <div className="text-8xl" data-swiper-parallax="-300">
          Personagens
        </div>
        <div className="text-base w-96" data-swiper-parallax="-100">
          <p>
          Explore o envolvente mundo de Naruto, onde personagens carismáticos como Naruto Uzumaki, Sasuke Uchiha e Tsunade trazem vida a uma trama ninja repleta de emoção e autodescoberta. Conheça heróis inspiradores como Sakura, Gaara e Rock Lee, cada um com habilidades únicas e histórias envolventes. Navegue por um universo onde a amizade e a coragem moldam destinos, em uma jornada épica que continua a cativar corações ao redor do mundo. Descubra por que Naruto permanece uma das sagas mais amadas da cultura pop.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-8xl" data-swiper-parallax="-300">
          Clãs
        </div>
        {/* <div className="text-2xl" data-swiper-parallax="-200">
          Subtitle
        </div> */}
        <div className="text-base w-96" data-swiper-parallax="-100">
          <p>
            Explore os clãs fascinantes de Naruto, onde tradições e habilidades únicas se entrelaçam. Do lendário Clã Uchiha, com o hipnotizante Sharingan, ao misterioso Clã Hyuga, com o revelador Byakugan, cada clã possui uma identidade distinta. Desde o passado enigmático do Clã Senju até as técnicas de controle mental do Clã Yamanaka, cada grupo desempenha um papel crucial na sociedade ninja. Junte-se a nós nessa jornada de rivalidades, tradições e conflitos, adicionando profundidade e complexidade ao vasto universo de Naruto.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-8xl" data-swiper-parallax="-300">
          Vilas
        </div>
        {/* <div className="text-2xl" data-swiper-parallax="-200">
          Subtitle
        </div> */}
        <div className="text-base w-96" data-swiper-parallax="-100">
          <p>
            Explore as vilas de Naruto, cenários vibrantes de cultura ninja e batalhas emocionantes. Da icônica Vila da Folha às misteriosas Vilas da Névoa, Nuvem e Pedra, cada localidade tem sua própria identidade e desafios únicos. Junte-se a nós nessa jornada através de mundos ninja intrigantes, onde líderes poderosos e ninjas habilidosos moldam o destino das vilas e o curso da história.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SlideHome;