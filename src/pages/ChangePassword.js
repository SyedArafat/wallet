import React, {useEffect, useState} from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";
import Loader from "../components/Loader";

function ChangePassword() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="change-password-page">
            {isLoading ? <Loader/> : <div>
                {/* Header */}
                <header className="section-t-space">
                    <div className="custom-container">
                        <div className="header-panel">
                            <Link to="/profile" className="back-btn">
                                <i className="icon" data-feather="arrow-left"></i>
                            </Link>
                            <h2>Change Password</h2>
                        </div>
                    </div>
                </header>

                {/* Change Password Section */}
                <section>
                    <div className="custom-container">
                        <h4 className="fw-normal light-text lh-base">
                            Enter your registered email or phone number to change your password.
                        </h4>
                        <form className="auth-form pt-0 mt-3" target="_blank">
                            <div className="form-group">
                                <label htmlFor="inputpin" className="form-label">Email or phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputpin"
                                    placeholder="Enter your email or phone number"
                                />
                            </div>
                            <Link to="/confirm-password-change" className="btn theme-btn w-100">
                                Change password
                            </Link>
                        </form>
                    </div>
                </section>
            </div>}
        </div>
    );
}

export default ChangePassword;
