import React, { useEffect } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function MyAccount() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    return (
        <div className="my-account-page">
            {/* Header */}
            <header className="section-t-space">
                <div className="custom-container">
                    <div className="header-panel">
                        <Link to="/profile" className="back-btn">
                            <i className="icon" data-feather="arrow-left"></i>
                        </Link>
                        <h2>My Account</h2>
                    </div>
                </div>
            </header>

            {/* Profile Section */}
            <section className="section-b-space">
                <div className="custom-container">
                    <div className="profile-section">
                        <div className="profile-banner">
                            <div className="profile-image">
                                <img className="img-fluid profile-pic" src="assets/images/person/p3.png" alt="Profile" />
                                <i className="camera" data-feather="camera"></i>
                            </div>
                        </div>
                        <h2>Survana Williams</h2>
                        <h5>+62 78459 25623</h5>
                    </div>

                    {/* Form */}
                    <form className="auth-form pt-0 mt-3" target="_blank">
                        <div className="form-group">
                            <label htmlFor="inputpin" className="form-label">Phone number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="inputpin"
                                defaultValue="+62 78459 25623"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputusername" className="form-label">User id</label>
                            <div className="form-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Survana_1202"
                                    id="inputusername"
                                    placeholder="Enter Your id"
                                />
                            </div>
                        </div>

                        <a href="profile.html" className="btn theme-btn w-100">Update</a>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default MyAccount;
