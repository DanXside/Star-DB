import React from 'react';
import PropTypes from 'prop-types';
import './row.css';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="people-item">
                {left}
            </div>
            <div className="people-item">
                {right}
            </div>
        </div>
    );
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;