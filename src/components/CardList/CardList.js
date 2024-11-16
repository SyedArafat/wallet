import React, { useEffect } from 'react';
import feather from 'feather-icons';

const cards = [
    {
        id: 1,
        colorClass: "color1",
        cardNumber: "**** **** **** 2563",
        cardName: "Anirudhaa Mehra",
        cardAmount: "$25,000.89",
        expDate: "12/24",
        cvv: "***",
    },
    {
        id: 2,
        colorClass: "color2",
        cardNumber: "**** **** **** 3478",
        cardName: "Shrushti Godgeren",
        cardAmount: "$15,256.25",
        expDate: "12/24",
        cvv: "***",
    },
    {
        id: 3,
        colorClass: "color3",
        cardNumber: "**** **** **** 3471",
        cardName: "Sni Pni",
        cardAmount: "$15,256.25",
        expDate: "12/24",
        cvv: "****",
    },
    // Add more card data as needed
];

function CardList() {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <section className="section-b-space">
            <div className="custom-container">
                <ul className="card-list">
                    {cards.map((card) => (
                        <li key={card.id} className={`credit-card-box ${card.colorClass}`}>
                            <div className="card-logo">
                                <img className="img-fluid" src="assets/images/svg/logo1.svg" alt="logo" />
                                <div className="dropdown">
                                    <a href="#" className="back-btn" role="button" data-bs-toggle="dropdown">
                                        <i className="icon" data-feather="more-horizontal"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#edit-card" data-bs-toggle="modal">Edit</a></li>
                                        <li><a className="dropdown-item" href="#delete" data-bs-toggle="modal">Remove</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6 className="card-number">{card.cardNumber}</h6>
                                    <h5 className="card-name">{card.cardName}</h5>
                                </div>
                                <img className="img-fluid chip" src="assets/images/svg/card-chip.svg" alt="card-chip" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <h2 className="card-amount">{card.cardAmount}</h2>
                                <div className="card-date">
                                    <h6>Exp. date</h6>
                                    <h6 className="text-white fw-semibold mt-1">{card.expDate}</h6>
                                </div>
                                <div className="card-numbers">
                                    <h6 className="cvv-code">Cvv</h6>
                                    <h6 className="text-white fw-semibold mt-1">{card.cvv}</h6>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CardList;
