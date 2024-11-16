import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import feather from "feather-icons";

const ForgetPassword = () => {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    const [emailOrPhone, setEmailOrPhone] = useState("");

    const handleChange = (e) => {
        setEmailOrPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send email/phone for pin reset)
        console.log("Reset request for:", emailOrPhone);
    };

    return (
        <div className="auth-body">
            <div className="auth-header">
                <Link to="/login">
                    <i className="back-btn" data-feather="arrow-left"></i>
                </Link>

                <img
                    className="img-fluid img"
                    src="assets/images/authentication/3.svg"
                    alt="v1"
                />

                <div className="auth-content">
                    <div>
                        <h2>Forget your pin</h2>
                        <h4 className="p-0">Don’t worry!</h4>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form className="auth-form" onSubmit={handleSubmit} target="_blank">
                <div className="custom-container">
                    <div className="form-group">
                        <h5>To reset your pin, enter your registered email or phone number.</h5>
                        <label htmlFor="inputusername" className="form-label">
                            Email or phone
                        </label>
                        <div className="form-input">
                            <input
                                type="email"
                                className="form-control"
                                id="inputusername"
                                placeholder="Enter Your Email or phone"
                                value={emailOrPhone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn theme-btn w-100">
                        Update pin
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;
