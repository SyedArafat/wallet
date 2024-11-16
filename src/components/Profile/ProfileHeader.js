import React from 'react';

function ProfileHeader() {
    return (
        <header className="section-t-space">
            <div className="custom-container">
                <div className="header-panel">
                    <a className="sidebar-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
                        <i className="menu-icon" data-feather="menu"></i>
                    </a>
                    <h2>Profile</h2>
                </div>
            </div>
        </header>
    );
}

export default ProfileHeader;
