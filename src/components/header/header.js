import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">
                    Star DB
                </Link>
            </h3>
            <ul className="header-items d-flex">
                <li>
                    <Link className="header-link" to="/people/">
                        People
                    </Link>
                </li>
                <li>
                    <Link className="header-link" to="/planets/">
                        Planets
                    </Link>
                </li>
                <li>
                    <Link className="header-link" to="/starships/">
                        Starships
                    </Link>
                </li>
                <li>
                    <Link className="header-link" to="/secret">
                        Secret
                    </Link>
                </li>
                <li>
                    <Link className="header-link" to="/login">
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;