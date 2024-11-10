import React, { useState } from "react";
import {Link} from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        pin: "",
        confirmPin: "",
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="auth-body">
            {/* Header */}
            <div className="auth-header">
                <a href="signin.html">
                    <i className="back-btn" data-feather="arrow-left"></i>
                </a>

                <img
                    className="img-fluid img"
                    src="assets/images/authentication/1.svg"
                    alt="v1"
                />

                <div className="auth-content">
                    <div>
                        <h2>Welcome back !!</h2>
                        <h4 className="p-0">Fill up the form</h4>
                    </div>
                </div>
            </div>

            {/* Form */}
            <form className="auth-form" onSubmit={handleSubmit} target="_blank">
                <div className="custom-container">
                    <div className="form-group">
                        <label htmlFor="inputname" className="form-label">
                            Full name
                        </label>
                        <div className="form-input">
                            <input
                                type="text"
                                className="form-control"
                                id="inputname"
                                name="fullName"
                                placeholder="Enter your name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputusername" className="form-label">
                            Email id
                        </label>
                        <div className="form-input">
                            <input
                                type="email"
                                className="form-control"
                                id="inputusername"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="newpin" className="form-label">
                            Enter new pin
                        </label>
                        <div className="form-input">
                            <input
                                type="number"
                                className="form-control"
                                id="newpin"
                                name="pin"
                                placeholder="Enter pin"
                                value={formData.pin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmpin" className="form-label">
                            Re-enter new pin
                        </label>
                        <div className="form-input">
                            <input
                                type="number"
                                className="form-control"
                                id="confirmpin"
                                name="confirmPin"
                                placeholder="Re-enter pin"
                                value={formData.confirmPin}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="remember-option mt-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                I agree to all terms & conditions
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn theme-btn w-100">
                        Sign up
                    </button>
                    <h4 className="signup">
                        Already have an account? <Link to="/signin"> Sign in</Link>
                    </h4>
                </div>
            </form>
        </div>
    );
};

export default Register;
