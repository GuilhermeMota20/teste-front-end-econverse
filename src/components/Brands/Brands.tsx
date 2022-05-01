import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import brandBuddy from '../../assets/brandBuddy.png';
import brandKong from '../../assets/brandKong.png';
import brandPetGames from '../../assets/brandPetGames.png';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './brands.scss';

export function Brands() {
    return(
        <section className="brands">
            <div className="brands__heading">
                <h2>Principais marcas</h2>
                <a href='/'> Ver todos </a>
            </div>

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={brandBuddy} alt="Logo Buddy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandKong} alt="Logo Kong" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandPetGames} alt="Logo Pet Games" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandBuddy} alt="Logo Buddy" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandKong} alt="Logo Kong" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={brandPetGames} alt="Logo Pet Games" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}