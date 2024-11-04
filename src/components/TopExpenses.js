import React from 'react';

const expenses = [
    {
        id: 1,
        title: "Food & Drinks",
        amount: "$2,000.00",
        progress: 60,
        color: "bg-danger",
        arrowIcon: "assets/images/svg/arrow.svg",
    },
    {
        id: 2,
        title: "Home Expense",
        amount: "$2,000.00",
        progress: 10,
        color: "bg-warning",
        arrowIcon: "assets/images/svg/arrow.svg",
    },
    {
        id: 3,
        title: "To Home",
        amount: "$2,000.00",
        progress: 40,
        color: "",
        arrowIcon: "assets/images/svg/arrow.svg",
    },
    {
        id: 4,
        title: "Lending Money",
        amount: "$2,000.00",
        progress: 30,
        color: "bg-success",
        arrowIcon: "assets/images/svg/arrow.svg",
    }
];

function TopExpenses() {
    return (
        <section>
            <div className="custom-container">
                <div className="title">
                    <h2>Top Expenses</h2>
                    <a href="saving-plans.html">See all</a>
                </div>
                <div className="row gy-3">
                    {expenses.map((expense) => (
                        <div key={expense.id} className="col-6">
                            <div className="saving-plan-box">
                                <h3>{expense.title}</h3>
                                <h6>Amount left</h6>
                                <div className="progress" role="progressbar" aria-label="progressbar" aria-valuenow={expense.progress}
                                     aria-valuemin="0" aria-valuemax="100">
                                    <div className={`progress-bar ${expense.color}`} style={{ width: `${expense.progress}%` }}></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-2">
                                    <h5 className="theme-color">{expense.amount}</h5>
                                    <img className="img-fluid arrow" src={expense.arrowIcon} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopExpenses;
