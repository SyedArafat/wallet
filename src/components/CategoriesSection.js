import React from 'react';

// Array of category data
const categories = [
    { id: 1, name: "Transfer", icon: "repeat", link: "transfer.html" },
    { id: 2, name: "Bill", icon: "file-text", link: "bill.html" },
    { id: 3, name: "Request", icon: "log-in", link: "request.html" },
    { id: 4, name: "Withdraw", icon: "bank", link: "withdraw.html" }
];

function CategoriesSection() {
    return (
        <section className="categories-section section-b-space">
            <div className="custom-container">
                <ul className="categories-list">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <a href={category.link}>
                                <div className="categories-box">
                                    {/* Use Feather icons library to load icons */}
                                    <i className={`categories-icon`} data-feather={category.icon}></i>
                                </div>
                                <h5 className="mt-2 text-center">{category.name}</h5>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CategoriesSection;
