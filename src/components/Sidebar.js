import React from 'react';

function Sidebar() {
    return (
        <div className="offcanvas sidebar-offcanvas offcanvas-start" id="offcanvasLeft">
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
                <ul className="link-section">
                    <li><a href="landing.html" className="pages"><i className="sidebar-icon" data-feather="credit-card"></i><h3>mPay</h3></a></li>
                    <li><a href="crypto.html" className="pages"><i className="sidebar-icon" data-feather="dollar-sign"></i><h3>Crypto</h3></a></li>
                    {/* Add other links here */}
                </ul>
                <div className="mode-switch">
                    <ul className="switch-section">
                        <li>
                            <h3>RTL</h3>
                            <div className="switch-btn"><input id="dir-switch" type="checkbox" /></div>
                        </li>
                        <li>
                            <h3>Dark</h3>
                            <div className="switch-btn"><input id="dark-switch" type="checkbox" /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
