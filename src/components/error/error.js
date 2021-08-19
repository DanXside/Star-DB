import React from 'react';

import './error.css';

const ErrorComponent = () => {
    return (
        <div className="error-container">
            <h2 className="error-title">BOOM!</h2>
            <div className="error-descr">
                Somethin's gone wrong.<br></br>
                We are already working on fixing this problem
            </div>
        </div>
    ) 
};

export default ErrorComponent;