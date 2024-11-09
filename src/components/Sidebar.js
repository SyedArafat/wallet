import React, { useState } from 'react';

function Sidebar() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const handleDarkModeToggle = () => {
        setIsDarkMode((prevMode) => !prevMode); // Toggle state
        document.body.classList.toggle('dark', !isDarkMode); // Add/remove 'dark' class
    };
    return (
        <div className="offcanvas sidebar-offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft">
            <div className="offcanvas-header sidebar-header">
                <div className="sidebar-logo">
                    <img className="img-fluid logo" src="assets/images/logo/logo.png" alt="logo" />
                </div>
                <div className="balance">
                    <img className="img-fluid balance-bg" src="assets/images/background/auth-bg.jpg" alt="auth-bg" />
                    <h5>Balance</h5>
                    <h2>$1,06,786.65</h2>
                </div>
            </div>
            <div className="offcanvas-body">
                <div className="sidebar-content">
                    <ul className="link-section">
                        <li>
                            <a href="landing.html" className="pages">
                                <i className="sidebar-icon" data-feather="credit-card"></i>
                                <h3>mPay</h3>
                            </a>
                        </li>
                        <li>
                            <a href="crypto.html" className="pages">
                                <i className="sidebar-icon" data-feather="dollar-sign"></i>
                                <h3>Crypto</h3>
                            </a>
                        </li>
                        <li>
                            <a href="page-list.html" className="pages">
                                <i className="sidebar-icon" data-feather="file-text"></i>
                                <h3>Theme Pages</h3>
                            </a>
                        </li>
                        <li>
                            <a href="component.html" className="pages">
                                <i className="sidebar-icon" data-feather="command"></i>
                                <h3>Theme Components</h3>
                            </a>
                        </li>
                        <li>
                            <a href="profile.html" className="pages">
                                <i className="sidebar-icon" data-feather="user"></i>
                                <h3>Profile</h3>
                            </a>
                        </li>
                        <li>
                            <a href="signin.html" className="pages">
                                <i className="sidebar-icon" data-feather="log-out"></i>
                                <h3>Log out</h3>
                            </a>
                        </li>
                    </ul>
                    <div className="mode-switch">
                        <ul className="switch-section">
                            <li>
                                <h3>RTL</h3>
                                <div className="switch-btn">
                                    <input id="dir-switch" type="checkbox" />
                                </div>
                            </li>
                            <li>
                                <h3>Dark</h3>
                                <div className="switch-btn">
                                    <input
                                        id="dark-switch"
                                        type="checkbox"
                                        checked={isDarkMode}
                                        onChange={handleDarkModeToggle}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
