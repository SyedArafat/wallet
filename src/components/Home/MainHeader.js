import React, {useEffect} from 'react';
import feather from "feather-icons";
import {Link} from "react-router-dom";

function Header() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <header className="section-t-space">
            <div className="custom-container">
                <div className="header-panel">
                    <Link className="sidebar-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" to="#">
                        <i className="menu-icon" data-feather="menu"></i>
                    </Link>
                    <img className="img-fluid logo" src="/assets/images/logo/logo.png" alt="logo" />
                    <Link to="/notification" className="notification">
                        <i className="notification-icon" data-feather="bell"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
