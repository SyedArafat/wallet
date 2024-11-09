// AuthForm.js
import React from 'react';
import { Link } from 'react-router-dom';

const AuthForm = () => {
    return (
        <form className="auth-form" target="_blank">
            <div className="custom-container">
                <div className="form-group">
                    <label htmlFor="inputusername" className="form-label">Email id</label>
                    <div className="form-input">
                        <input
                            type="email"
                            className="form-control"
                            id="inputusername"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="inputpin" className="form-label">Pin</label>
                    <div className="form-input">
                        <input
                            type="password"
                            className="form-control"
                            id="inputpin"
                            placeholder="Enter Your pin"
                            required
                        />
                    </div>
                </div>

                <div className="remember-option mt-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                    </div>
                    <Link className="forgot" to="/forgot-password">Forgot Pin?</Link>
                </div>

                <Link to="/landing" className="btn theme-btn w-100">Sign In</Link>
                <h4 className="signup">Don’t have an account? <Link to="/signup"> Sign up</Link></h4>

                <div className="division">
                    <span>OR</span>
                </div>

                <a
                    href="https://www.google.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn gray-btn mt-3">
                    <img className="img-fluid google" src="assets/images/svg/google.svg" alt="google" />
                    Continue with Google
                </a>
                <a
                    href="https://www.facebook.com/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn gray-btn mt-3">
                    <img className="img-fluid google" src="assets/images/svg/facebook.svg" alt="facebook" />
                    Continue with Facebook
                </a>
            </div>
        </form>
    );
};

export default AuthForm;
