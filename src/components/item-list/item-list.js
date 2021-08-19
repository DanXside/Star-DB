import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {
    render() {
        return (
            <div className="item-list">
                <ul className="list-group list-low">
                    <li className="list-group-item list-low-item">
                        Luke Skywalker
                    </li>
                    <li className="list-group-item list-low-item">
                        Darth Vader
                    </li>
                    <li className="list-group-item list-low-item">
                        R2-D2
                    </li>
                </ul>
            </div>
        );
    }
};