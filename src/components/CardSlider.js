import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

function CardSlider() {
    return (
        <section className="section-b-space">
            <div className="custom-container">
                <div className="title">
                    <h2>All Cards</h2>
                    <a href="cards.html">See all</a>
                </div>
                <Swiper spaceBetween={30} slidesPerView={1}>
                    <SwiperSlide>
                        {/* Card content here */}
                    </SwiperSlide>
                    {/* Add more SwiperSlide components as needed */}
                </Swiper>
            </div>
        </section>
    );
}

export default CardSlider;
