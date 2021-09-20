import React from 'react';

import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list/item-list';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = withSwapiService(mapPersonMethodToProps)(
                    withData(
                        withChildFunction(renderName)(
                            ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodToProps)(
                    withData(
                        withChildFunction(renderName)(
                            ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodToProps)(
                        withData(
                            withChildFunction(renderNameAndModel)(
                                ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};