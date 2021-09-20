import React, { Component } from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './app.css';

export default class App extends Component {
    
    swapiService = new SwapiService();

    render() {
        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header />

                    <RandomPlanet />

                    <PeoplePage />

                    <PlanetsPage />

                    <StarshipsPage />

                </SwapiServiceProvider>
            </div>
        );
    }
    
};
