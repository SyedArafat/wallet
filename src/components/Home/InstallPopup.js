import React, { useEffect } from 'react';

function InstallPopup() {
    useEffect(() => {
        // Import Feather icons and initialize
        const feather = require('feather-icons');
        feather.replace();

        // You can add additional JavaScript or initialize libraries here if necessary
    }, []);

    return (
        <div
            className="offcanvas offcanvas-bottom addtohome-popup theme-offcanvas"
            id="offcanvas"
            tabIndex="-1"
        >
            <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
            ></button>
            <div className="offcanvas-body small">
                <div className="app-info">
                    <img src="assets/images/logo/48.png" className="img-fluid" alt="App Logo" />
                    <div className="content">
                        <h4>mPay App</h4>
                        <a href="#">www.mPay-app.com</a>
                    </div>
                </div>
                <a href="#!" className="btn theme-btn install-app btn-inline home-screen-btn m-0" id="installapp">
                    Add to Home Screen
                </a>
            </div>
        </div>
    );
}

export default InstallPopup;
