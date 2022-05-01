import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import bannerSignature from '../../assets/bannerSignature.png';
import dogSignature from '../../assets/dogSignature.png';

import "swiper/css";
import "swiper/css/pagination";

import './signature.scss';

export function Signature() {
    return(
        <section className="signature">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bannerSignature} alt="banner" />
                    <div>
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerSignature} alt="banner" />
                    <div>
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannerSignature} alt="banner" />
                    <div>
                        <h1>Parceiros</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Confira</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="signature__forMore">
                <div>
                    <h2>Assinatura Cãoselheiro</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
                    <button>Saiba mais</button>
                </div>

                <img src={dogSignature} alt="Dog feliz" />
            </div>
        </section>
    )
}
