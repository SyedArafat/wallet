import React from 'react';

const services = [
    { id: 1, name: "Electricity", icon: "activity", link: "service.html" },
    { id: 2, name: "Water", icon: "droplet", link: "service.html" },
    { id: 3, name: "Internet", icon: "wifi", link: "service.html" },
    { id: 4, name: "Television", icon: "monitor", link: "service.html" },
    { id: 5, name: "Investment", icon: "bar-chart-2", link: "service.html" },
    { id: 6, name: "Mobile", icon: "tablet", link: "service.html" },
    { id: 7, name: "Medical", icon: "plus-square", link: "service.html" },
    { id: 8, name: "Other", icon: "more-horizontal", link: "service.html" }
];

function ServiceSection() {
    return (
        <section>
            <div className="custom-container">
                <div className="title">
                    <h2>Select service</h2>
                    <a href="service.html">See all</a>
                </div>
                <div className="row gy-3">
                    {services.map((service) => (
                        <div key={service.id} className="col-3">
                            <a href={service.link}>
                                <div className="service-box">
                                    <i className="service-icon" data-feather={service.icon}></i>
                                </div>
                                <h5 className="mt-2 text-center dark-text">{service.name}</h5>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
