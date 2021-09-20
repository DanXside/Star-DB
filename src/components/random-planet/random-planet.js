import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './random-planet.css';
import '../../services/swapi-service';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorComponent from '../error/error';

export default class RandomPlanet extends Component {
   
    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };
    
    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        setInterval(this.updatePlanet, updateInterval);
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };

    onError = (error) => {
        this.setState({error: true, loading: false});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);       
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorComponent /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;

        return (
            <div className="random-planet bg-dark mb-3">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
    
};

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    const PlanetImage = ({id}) => {
        if (id === undefined) return null 
            
        return (
          <img className="planet-image"
               src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        )
    };

    return (
        <React.Fragment>
            <PlanetImage id={id} />
                <div>
                    <h3>{ name }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
};