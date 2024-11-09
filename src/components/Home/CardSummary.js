import React, { useState } from 'react';
import AddMoneyModal from '../Modals/AddMoneyModal';

function CardSummary() {
    const [, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);

    return (
        <section className="section-b-space">
            <div className="custom-container">
                <div className="card-box">
                    <div className="card-details">
                        <div className="d-flex justify-content-between">
                            <h5 className="fw-semibold">Total Balance</h5>
                            <img src="assets/images/svg/ellipse.svg" alt="ellipse" />
                        </div>

                        <h1 className="mt-2 text-white">$ 1,06,786.65</h1>

                        <div className="amount-details">
                            <div className="amount w-50 text-start">
                                <div className="d-flex align-items-center justify-content-start">
                                    <img className="img-fluid icon" src="assets/images/svg/arrow-down-right.svg" alt="down" />
                                    <h5>Income</h5>
                                </div>
                                <h3 className="text-white">$ 15,256.33</h3>
                            </div>
                            <div className="amount w-50 text-end border-0">
                                <div className="d-flex align-items-center justify-content-end">
                                    <img className="img-fluid icon" src="assets/images/svg/arrow-up-right.svg" alt="up" />
                                    <h5>Expense</h5>
                                </div>
                                <h3 className="text-white">$ 91,530.32</h3>
                            </div>
                        </div>
                    </div>
                    <AddMoneyModal className="add-money theme-color" onClick={handleShowModal} />
                </div>
            </div>
        </section>
    );
}

export default CardSummary;
