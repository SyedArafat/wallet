import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const cards = [
    {
        id: 1,
        colorClass: "color1",
        logo: "assets/images/svg/logo1.svg",
        chip: "assets/images/svg/card-chip.svg",
        cardNumber: "**** **** **** 2563",
        cardName: "Survana Williams",
        cardAmount: "$25,000.89",
        expDate: "12/24",
        cvv: "***"
    },
    {
        id: 2,
        colorClass: "color2",
        logo: "assets/images/svg/logo1.svg",
        chip: "assets/images/svg/card-chip.svg",
        cardNumber: "**** **** **** 2563",
        cardName: "Survana Williams",
        cardAmount: "$25,000.89",
        expDate: "12/24",
        cvv: "***"
    },
    {
        id: 3,
        colorClass: "color3",
        logo: "assets/images/svg/logo1.svg",
        chip: "assets/images/svg/card-chip.svg",
        cardNumber: "**** **** **** 2563",
        cardName: "Survana Williams",
        cardAmount: "$25,000.89",
        expDate: "12/24",
        cvv: "***"
    }
];

function AllCards() {
    return (
        <section>
            <div className="custom-container">
                <div className="title">
                    <h2>All Cards</h2>
                    <a href="cards.html">See all</a>
                </div>
                <Swiper
                    spaceBetween={10}  // Adjust the space between slides
                    slidesPerView={1}  // Show a portion of the next slide
                    loop={true}  // Enable looping
                    pagination={{ clickable: true }}  // Add pagination dots
                    modules={[Pagination]}
                    className="card-slider"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className={`credit-card-box ${card.colorClass}`}>
                                <div className="card-logo">
                                    <img className="img-fluid" src={card.logo} alt="logo" />
                                    <img className="img-fluid" src={card.chip} alt="card chip" />
                                </div>
                                <h6 className="card-number">{card.cardNumber}</h6>
                                <h5 className="card-name">{card.cardName}</h5>
                                <h2 className="card-amount">{card.cardAmount}</h2>
                                <div className="d-block">
                                    <div className="card-date w-100">
                                        <h6>Exp. date</h6>
                                        <h6>Cvv</h6>
                                    </div>
                                    <div className="card-numbers w-100">
                                        <h6 className="text-white fw-semibold mt-1">{card.expDate}</h6>
                                        <h6 className="text-white fw-semibold mt-1">{card.cvv}</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default AllCards;
