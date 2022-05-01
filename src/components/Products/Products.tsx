import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import './products.scss';

export function Products() {
    return(
        <section className="products">

            <div className="products__heading">
                <h2>Meu cachorro...</h2>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="nav"
                >
                    <SwiperSlide><button className="active">É agitado</button></SwiperSlide>
                    <SwiperSlide><button>Morde</button></SwiperSlide>
                    <SwiperSlide><button>Late muito</button></SwiperSlide>
                    <SwiperSlide><button>É ansioso</button></SwiperSlide>
                    <SwiperSlide><button>É estressado</button></SwiperSlide>
                </Swiper>
            </div>

            <h1>Em breve!</h1>

        </section>
    )
}