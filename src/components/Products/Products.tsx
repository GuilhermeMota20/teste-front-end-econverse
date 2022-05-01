import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import productOne from '../../assets/product1.png';
import productTwo from '../../assets/product2.png';
import heartIcon from '../../assets/Heart.svg';

import "swiper/css";
import "swiper/css/pagination";
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

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="products__mySwiper"
            >
                <SwiperSlide>
                    <img src={productOne} />

                    <div className="content">
                        <div className="description">
                            <p>Lorem ipsum dolor amet</p>
                            <span>Lorem ipsum</span>
                        </div>

                        <div className="price">
                            <h3>Por R$ 00,00</h3>
                            <strong>R$ 00,00</strong>
                        </div>

                    </div>

                    <button>Adicionar</button>

                    <div className="actions">
                        <span>40% OFF</span>
                        <img src={heartIcon} alt="Favoritar produto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productOne} />

                    <div className="content">
                        <div className="description">
                            <p>Lorem ipsum dolor amet</p>
                            <span>Lorem ipsum</span>
                        </div>

                        <div className="price">
                            <h3>Por R$ 00,00</h3>
                            <strong>R$ 00,00</strong>
                        </div>

                    </div>

                    <button>Adicionar</button>

                    <div className="actions">
                        <span>40% OFF</span>
                        <a href="/">
                            <img src={heartIcon} alt="Favoritar produto" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productOne} />

                    <div className="content">
                        <div className="description">
                            <p>Lorem ipsum dolor amet</p>
                            <span>Lorem ipsum</span>
                        </div>

                        <div className="price">
                            <h3>Por R$ 00,00</h3>
                            <strong>R$ 00,00</strong>
                        </div>

                    </div>

                    <button>Adicionar</button>

                    <div className="actions">
                        <span>40% OFF</span>
                        <img src={heartIcon} alt="Favoritar produto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productOne} />

                    <div className="content">
                        <div className="description">
                            <p>Lorem ipsum dolor amet</p>
                            <span>Lorem ipsum</span>
                        </div>

                        <div className="price">
                            <h3>Por R$ 00,00</h3>
                            <strong>R$ 00,00</strong>
                        </div>

                    </div>

                    <button>Adicionar</button>

                    <div className="actions">
                        <span>40% OFF</span>
                        <img src={heartIcon} alt="Favoritar produto" />
                    </div>
                </SwiperSlide>

                <div className="viewAll">
                    <a href="/">Ver todos</a>
                </div>

            </Swiper>

            {/* <h1>Em breve!</h1> */}



        </section>
    )
}