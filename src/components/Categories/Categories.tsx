import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import dogOne from '../../assets/dog1.png';
import dogTwo from '../../assets/dog2.png';
import dogThree from '../../assets/dog3.png';
import dogFour from '../../assets/dog4.png';

import "swiper/css";
import "swiper/css/navigation";

import './categories.scss';

export function Categories() {
    return (

        <section id='category' className='category'>
            <h2>Categorias</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={21}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={dogOne} alt="Cachorro com bolinha na boca" />
                    <strong>Brinquedos</strong>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dogTwo} alt="Cachorro pegando petisco" />
                    <strong>Petiscos</strong>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dogThree} alt="Cachorro com guia" />
                    <strong>Guias</strong>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={dogFour} alt="Cachorro tomando banaho" />
                    <strong>Higiene</strong>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}