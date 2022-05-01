import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';
import blog4 from '../../assets/blog4.png';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './blog.scss'

export function Blog() {
    return (
        <section className='blog'>
            <h2>Confira o nosso blog</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={21}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={blog1} alt="Post do Blog" />
                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                        <button>Ler artigo</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={blog2} alt="Post do Blog" />
                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                        <button>Ler artigo</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={blog3} alt="Post do Blog" />
                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                        <button>Ler artigo</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={blog4} alt="Post do Blog" />
                    <div>
                        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
                        <button>Ler artigo</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}