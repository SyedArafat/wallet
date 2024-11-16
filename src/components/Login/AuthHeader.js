import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import feather from "feather-icons";

const AuthHeader = () => {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="auth-header">
            <Link to="/">
                <i className="back-btn" data-feather="arrow-left"></i>
            </Link>
            <img className="img-fluid img" src="assets/images/authentication/1.svg" alt="v1" />
            <div className="auth-content">
                <div>
                    <h2>Welcome back !!</h2>
                    <h4 className="p-0">Fill up the form</h4>
                </div>
            </div>
        </div>
    );
};

export default AuthHeader;
