import React, { useEffect } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function ProfileSection() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    return (
        <section className="section-b-space">
            <div className="custom-container">
                <div className="profile-section">
                    <div className="profile-banner">
                        <div className="profile-image">
                            <img className="img-fluid profile-pic" src="assets/images/person/p3.png" alt="Profile" />
                        </div>
                    </div>
                    <h2>Survana Williams</h2>
                    <h5>+62 78459 25623</h5>
                </div>

                <ul className="profile-list">
                    <li>
                        <Link to="/my-account" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="user"></i>
                            </div>
                            <div className="profile-details">
                                <h4>My Account</h4>
                                <img className="img-fluid arrow" src="assets/images/svg/arrow.svg" alt="arrow" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cards" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="credit-card"></i>
                            </div>
                            <div className="profile-details">
                                <h4>My Cards</h4>
                                <img className="img-fluid arrow" src="assets/images/svg/arrow.svg" alt="arrow" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/change-password" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="settings"></i>
                            </div>
                            <div className="profile-details">
                                <h4>Change Password</h4>
                                <img className="img-fluid arrow" src="assets/images/svg/arrow.svg" alt="arrow" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="lock"></i>
                            </div>
                            <div className="profile-details">
                                <h4>Settings</h4>
                                <img className="img-fluid arrow" src="assets/images/svg/arrow.svg" alt="arrow" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="help-circle"></i>
                            </div>
                            <div className="profile-details">
                                <h4>Help Center</h4>
                                <img className="img-fluid arrow" src="assets/images/svg/arrow.svg" alt="arrow" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="signin.html" className="profile-box">
                            <div className="profile-img">
                                <i className="icon" data-feather="log-out"></i>
                            </div>
                            <div className="profile-details">
                                <h4>Log Out</h4>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default ProfileSection;
