import React, { useEffect, useState } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function ConfirmPasswordChange() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    // Form input states (if needed)
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log('Password updated:', { oldPassword, newPassword, confirmPassword });
    };

    return (
        <div className="change-password-page">
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
                    <form className="auth-form pt-0" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="inputoldpassword" className="form-label">Old Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputoldpassword"
                                placeholder="Enter your old password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputnewpassword" className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputnewpassword"
                                placeholder="Enter your new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputconfirmpassword" className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputconfirmpassword"
                                placeholder="Enter your confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="btn theme-btn w-100">Update password</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default ConfirmPasswordChange;
