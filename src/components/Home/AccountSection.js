import React from 'react';

const accountData = [
    { id: 1, name: "CASH", amount: "$69.49", icon: "/assets/images/svg/6.svg" },
    { id: 2, name: "bKash", amount: "$69.49", icon: "/assets/images/svg/7.svg" },
    { id: 3, name: "CITY BANK", amount: "$69.49", icon: "/assets/images/svg/8.svg" },
    { id: 4, name: "NAGAD", amount: "$69.49", icon: "/assets/images/svg/9.svg" },
];

function AccountDetails() {
    return (
        <section>
            <div className="custom-container">
                <div className="title">
                    <h2>Account Details</h2>
                    <a href="bill.html">See all</a>
                </div>
                <div className="row g-3">
                    {accountData.map((account) => (
                        <div key={account.id} className="col-md-3 col-6">
                            <div className="bill-box">
                                <div className="d-flex gap-3">
                                    <div className="bill-icon">
                                        <img className="img-fluid icon" src={account.icon} alt={account.name} />
                                    </div>
                                    <div className="bill-details">
                                        <h4 className="light-text">{account.name}</h4>
                                        <h5 className="dark-text mt-2">{account.amount}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AccountDetails;
