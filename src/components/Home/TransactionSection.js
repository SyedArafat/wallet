// TransactionSection.js
import React from 'react';

const TransactionSection = () => {
    const transactions = [
        {
            name: "Food & Drinks",
            amount: "$199.99",
            amountClass: "error-color",
            paymentType: "Cash",
            date: "9 December 2023",
            imgSrc: "assets/images/svg/1.svg",
            imgAlt: "p1"
        },
        {
            name: "Apple store",
            amount: "$60.30",
            amountClass: "success-color",
            paymentType: "Installment",
            date: "9:00 pm",
            imgSrc: "assets/images/svg/2.svg",
            imgAlt: "p2"
        },
        {
            name: "Grocery shop",
            amount: "$55.20",
            amountClass: "error-color",
            paymentType: "Purchase",
            date: "20 May",
            imgSrc: "assets/images/svg/3.svg",
            imgAlt: "p3"
        },
        {
            name: "Snapchat sub",
            amount: "$18.10",
            amountClass: "success-color",
            paymentType: "Bill pay",
            date: "19 May",
            imgSrc: "assets/images/svg/4.svg",
            imgAlt: "p4"
        },
        {
            name: "Spotify music",
            amount: "$20.50",
            amountClass: "success-color",
            paymentType: "Transfer",
            date: "18 May",
            imgSrc: "assets/images/svg/5.svg",
            imgAlt: "p5"
        }
    ];

    return (
        <section>
            <div className="custom-container">
                <div className="title">
                    <h2>Latest Transaction</h2>
                    <a href="transaction-history.html">See all</a>
                </div>

                <div className="row gy-3">
                    {transactions.map((transaction, index) => (
                        <div className="col-12" key={index}>
                            <div className="transaction-box">
                                <a href="transaction-history.html" className="d-flex gap-3">
                                    <div className="transaction-image">
                                        <img
                                            className="img-fluid transaction-icon"
                                            src={transaction.imgSrc}
                                            alt={transaction.imgAlt}
                                        />
                                    </div>
                                    <div className="transaction-details">
                                        <div className="transaction-name">
                                            <h5>{transaction.name}</h5>
                                            <h3 className={transaction.amountClass}>
                                                {transaction.amount}
                                            </h3>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <h5 className="light-text">{transaction.paymentType}</h5>
                                            <h5 className="light-text">{transaction.date}</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransactionSection;
