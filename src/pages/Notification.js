import React, { useEffect } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function NotificationPage() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    return (
        <div className="notification-page">
            {/* Header */}
            <header className="section-t-space">
                <div className="custom-container">
                    <div className="header-panel">
                        <Link to="/home" className="back-btn">
                            <i className="icon" data-feather="arrow-left"></i>
                        </Link>
                        <h2>Notification</h2>
                        <div className="dropdown">
                            <a href="#" className="back-btn" role="button" data-bs-toggle="dropdown">
                                <i className="icon" data-feather="settings"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="#">Mute notification</Link></li>
                                <li><Link className="dropdown-item" to="#">Mark as all read</Link></li>
                                <li><Link className="dropdown-item" to="#">Remove all</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Notification Section */}
            <section className="section-b-space">
                <div className="custom-container">
                    {/* Today's Notifications */}
                    <div className="title">
                        <h2>Today</h2>
                    </div>
                    <ul className="notification-list">
                        <li className="notification-box">
                            <div className="notification-img">
                                <img className="img-fluid icon" src="assets/images/person/p1.png" alt="p1" />
                            </div>
                            <div className="notification-details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <a href="receive-money.html">
                                            <h5 className="fw-semibold dark-text">Payment received</h5>
                                        </a>
                                        <h6 className="fw-normal light-text mt-1">Dianne Christian</h6>
                                    </div>
                                    <h6 className="time fw-normal light-text">9:02 pm</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="dark-text fw-normal">
                                        You received payment of <span className="fw-semibold theme-color">$25.85</span>
                                    </h5>
                                </div>
                            </div>
                        </li>
                        <li className="notification-box">
                            <div className="notification-img">
                                <img className="img-fluid icon" src="assets/images/person/p2.png" alt="p2" />
                            </div>
                            <div className="notification-details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="fw-semibold dark-text">Payment request</h5>
                                        <h6 className="fw-normal light-text mt-1">Connie Williams</h6>
                                    </div>
                                    <h6 className="time fw-normal light-text">8:45 pm</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="dark-text fw-normal">
                                        Send a pay request of <span className="fw-semibold theme-color">$56.48</span>
                                    </h5>
                                    <a href="transfer-person.html" className="btn theme-btn pay-btn mt-0">Pay</a>
                                </div>
                            </div>
                        </li>
                        <li className="notification-box">
                            <div className="notification-img img1">
                                <img className="img-fluid notification-icon" src="assets/images/svg/alert.svg" alt="alert" />
                            </div>
                            <div className="notification-details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="fw-normal dark-text">Saving Alert</h5>
                                        <h6 className="fw-normal light-text mt-1">Bank</h6>
                                    </div>
                                    <h6 className="time fw-normal light-text">5:12 am</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="light-text fw-normal">Your monthly expense almost breaks the budget.</h5>
                                </div>
                            </div>
                        </li>
                    </ul>

                    {/* Yesterday's Notifications */}
                    <div className="title mt-3">
                        <h2>Yesterday</h2>
                    </div>
                    <ul className="notification-list">
                        <li className="notification-box">
                            <div className="notification-img">
                                <img className="img-fluid icon" src="assets/images/person/p3.png" alt="p3" />
                            </div>
                            <div className="notification-details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="fw-semibold dark-text">Payment sent</h5>
                                        <h6 className="fw-normal light-text mt-1">Kristina Johny</h6>
                                    </div>
                                    <h6 className="time fw-normal light-text">5:12 am</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="light-text fw-normal">
                                        <span className="fw-semibold theme-color">$25.85</span> amount has been sent to
                                        <span className="dark-text">Kristina Johny</span>
                                    </h5>
                                </div>
                            </div>
                        </li>
                        <li className="notification-box">
                            <div className="notification-img img2">
                                <img className="img-fluid notification-icon" src="assets/images/svg/lock.svg" alt="alert" />
                            </div>
                            <div className="notification-details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="fw-normal dark-text">Security Alert</h5>
                                        <h6 className="fw-normal light-text mt-1">Bank</h6>
                                    </div>
                                    <h6 className="time fw-normal light-text">5:12 am</h6>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="light-text fw-normal">You have changed your password from a Samsung device.</h5>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default NotificationPage;
