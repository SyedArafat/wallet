import React from 'react';

const BottomNavbar = () => {
    return (
        <>
            <section className="panel-space"></section>
            <div className="navbar-menu">
                <div className="scanner-bg">
                    <a href="scan-pay.html" className="scanner-btn">
                        <img className="img-fluid" src="assets/images/svg/scan.svg" alt="scan"/>
                    </a>
                </div>
                <ul>
                    <li className="active">
                        <a href="landing.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/mpay.svg" alt="mPay"/>
                                <img className="active" src="assets/images/svg/mpay-fill.svg" alt="mPay"/>
                            </div>
                            <h5 className="active">mPay</h5>
                        </a>
                    </li>

                    <li>
                        <a href="crypto.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/bitcoin.svg" alt="categories"/>
                                <img className="active" src="assets/images/svg/bitcoin-fill.svg" alt="categories"/>
                            </div>
                            <h5>Crypto</h5>
                        </a>
                    </li>

                    {/* Placeholder for center button */}
                    <li></li>

                    <li>
                        <a href="insight.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/bar-chart.svg" alt="bag"/>
                                <img className="active" src="assets/images/svg/bar-chart-fill.svg" alt="bag"/>
                            </div>
                            <h5>Insight</h5>
                        </a>
                    </li>

                    <li>
                        <a href="profile.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/user.svg" alt="profile"/>
                                <img className="active" src="assets/images/svg/user-fill.svg" alt="profile"/>
                            </div>
                            <h5>Profile</h5>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BottomNavbar;
