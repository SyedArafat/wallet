import React from 'react';

function Header() {
    return (
        <header className="section-t-space">
            <div className="custom-container">
                <div className="header-panel">
                    <a className="sidebar-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
                        <i className="menu-icon" data-feather="menu"></i>
                    </a>
                    <img className="img-fluid logo" src="/assets/images/logo/logo.png" alt="logo" />
                    <a href="notification.html" className="notification">
                        <i className="notification-icon" data-feather="bell"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
