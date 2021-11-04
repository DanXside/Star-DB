import React, { Component } from 'react';


import Header from '../header';
import RandomPlanet from '../random-planet';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import { PeoplePage, PlanetsPage, StarshipsPage, SecretPage, LoginPage } from '../pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {

    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };
    
    swapiService = new SwapiService();

    render() {
        const { isLoggedIn } = this.state;

        return (
            <div>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <Header />

                        <RandomPlanet />

                        <Route path="/" render={() => <h2>Wellcome to StarDB!</h2>} exact />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets" component={PlanetsPage} />
                        <Route path="/starships" component={StarshipsPage} exact />
                        <Route path="/starships/:id" render={({match}) => {
                            const {id} = match.params;
                            return <StarshipDetails itemId={id} />
                            }} />
                        <Route path="/secret"
                            render={() => (
                            <SecretPage isLoggedIn={isLoggedIn} />
                            )} />
                        <Route path="/login"
                            render={() => (
                            <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                            )} />

                    </Router>

                </SwapiServiceProvider>
            </div>
        );
    }
    
};
