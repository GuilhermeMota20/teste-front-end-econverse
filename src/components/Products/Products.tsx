import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import heartIcon from '../../assets/Heart.svg';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './products.scss';

interface ProductsProps {
    productName: string,
    photo: string,
    price: number
}

export function Products() {
    const [product, setProduct] = useState<ProductsProps[]>([]);

    useEffect(() => {
        fetch('./products.json', {
            headers: {
                Accept: 'application/json',
            }
        }).then(res => res.json())
          .then(data => setProduct(data.products))
    }, []);

    return (
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

                {product.map((data, index) => (
                    <SwiperSlide key={ index }>
                        <div className="img">
                            <img src={data.photo} alt="Banco de imagens não existe!" />
                        </div>

                        <div className="content">
                            <div className="description">
                                <p>{data.productName}</p>
                                <span>De R$ 96,69</span>
                            </div>

                            <div className="price">
                                <h3>
                                    Por &nbsp;
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(data.price)}
                                </h3>
                                <strong>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(data.price / 27)}
                                </strong>
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
                ))}

                <div className="viewAll">
                    <a href="/">Ver todos</a>
                </div>
            </Swiper>
        </section>
    )
}