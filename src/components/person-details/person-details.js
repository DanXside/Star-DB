import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person-details bg-dark mb-3">
                <img className="person-image"
                src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />
                <div>
                    <h4>R2-D2</h4>
                    <ul className="list-group person-list">
                        <li className="list-group-item person-item">
                            <span className="term">Gender</span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item person-item">
                            <span className="term">Birth year</span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item person-item">
                            <span className="term">Eye color</span>
                            <span>red</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}