import React from 'react';
import {Link} from "react-router-dom";

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
                        <Link to="/home">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/mpay.svg" alt="mPay"/>
                                <img className="active" src="assets/images/svg/mpay-fill.svg" alt="mPay"/>
                            </div>
                            <h5 className="active">mPay</h5>
                        </Link>
                    </li>

                    <li>
                        <Link to="crypto.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/bitcoin.svg" alt="categories"/>
                                <img className="active" src="assets/images/svg/bitcoin-fill.svg" alt="categories"/>
                            </div>
                            <h5>Crypto</h5>
                        </Link>
                    </li>

                    {/* Placeholder for center button */}
                    <li></li>

                    <li>
                        <Link to="insight.html">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/bar-chart.svg" alt="bag"/>
                                <img className="active" src="assets/images/svg/bar-chart-fill.svg" alt="bag"/>
                            </div>
                            <h5>Insight</h5>
                        </Link>
                    </li>

                    <li>
                        <Link to="/profile">
                            <div className="icon">
                                <img className="unactive" src="assets/images/svg/user.svg" alt="profile"/>
                                <img className="active" src="assets/images/svg/user-fill.svg" alt="profile"/>
                            </div>
                            <h5>Profile</h5>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default BottomNavbar;
