import React, { useEffect } from 'react';
import feather from 'feather-icons';
import {Link} from "react-router-dom";

function CardListHeader() {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <header className="section-t-space">
            <div className="custom-container">
                <div className="header-panel">
                    <Link to="/profile" className="back-btn">
                        <i className="icon" data-feather="arrow-left"></i>
                    </Link>
                    <h2>My Cards</h2>
                    <Link to="#add-card" className="back-btn" data-bs-toggle="modal">
                        <i className="icon" data-feather="plus"></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default CardListHeader;
