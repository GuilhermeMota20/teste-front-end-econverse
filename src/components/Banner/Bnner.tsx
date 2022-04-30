import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import bannerImg from '../../assets/banner.png';
import arrowIcon from '../../assets/arrow.svg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './banner.scss';

export function Banner() {
    return(
        <section className="banner">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bannerImg} alt="Banner principal" />
                    <div>
                        <h1>As melhores guias para os melhores passeios.</h1>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImg} alt="Banner principal" />
                    <div>
                        <h1>As melhores guias para os melhores passeios.</h1>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerImg} alt="Banner principal" />
                    <div>
                        <h1>As melhores guias para os melhores passeios.</h1>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <a href="#category"> <img src={arrowIcon} alt="Siga para baixo" /> </a>
        </section>
    )
}