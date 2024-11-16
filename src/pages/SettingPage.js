import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function SettingPage() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    // State variables for notification settings
    const [paymentNotification, setPaymentNotification] = useState(true);
    const [notificationSound, setNotificationSound] = useState(false);
    const [billDueDate, setBillDueDate] = useState(true);

    // Handlers to toggle state
    const handleTogglePaymentNotification = () => {
        setPaymentNotification(!paymentNotification);
    };

    const handleToggleNotificationSound = () => {
        setNotificationSound(!notificationSound);
    };

    const handleToggleBillDueDate = () => {
        setBillDueDate(!billDueDate);
    };

    return (
        <div className="setting-page">
            {/* Header */}
            <header className="section-t-space">
                <div className="custom-container">
                    <div className="header-panel">
                        <Link to="/profile" className="back-btn">
                            <i className="icon" data-feather="arrow-left"></i>
                        </Link>
                        <h2>Setting</h2>
                    </div>
                </div>
            </header>

            {/* Notification Section */}
            <section>
                <div className="custom-container">
                    <ul className="notification-setting">
                        <li className="setting-title">
                            <div className="notification pt-0">
                                <h3 className="fw-semibold dark-text">Notification</h3>
                            </div>
                        </li>

                        <li>
                            <div className="notification">
                                <h5 className="fw-normal dark-text">Payment notification</h5>
                                <div className="switch-btn">
                                    <input
                                        type="checkbox"
                                        checked={paymentNotification}
                                        onChange={handleTogglePaymentNotification}
                                    />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="notification">
                                <h5 className="fw-normal dark-text">Notification sound</h5>
                                <div className="switch-btn">
                                    <input
                                        type="checkbox"
                                        checked={notificationSound}
                                        onChange={handleToggleNotificationSound}
                                    />
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="notification pb-0">
                                <h5 className="fw-normal dark-text">Bill due date</h5>
                                <div className="switch-btn">
                                    <input
                                        type="checkbox"
                                        checked={billDueDate}
                                        onChange={handleToggleBillDueDate}
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default SettingPage;
