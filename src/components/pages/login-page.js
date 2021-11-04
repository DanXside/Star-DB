import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({isLoggedIn, onLogin}) => {
    if (isLoggedIn) {
        return <Redirect to="/" />
    };

    return (
        <div className="jumbotron text-center">
            <p>Login to see SecretPage</p>
            <button className="btn btn-primary"
                    onClick={onLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;