import React, { Component } from 'react';

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item person-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId != prevProps.personId) {
            this.updateItem();
        };
    };

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        };

        getData(itemId)
            .then((item) => {
                this.setState({ 
                item,
                image: getImageUrl(item) 
                });
            });
    };

    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>
        };

        const { item, image } = this.state;

        const { name } = this.state.item;

        return (
            <div className="person-details bg-dark mb-3">
                <img className="person-image"
                src={image} />
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group person-list">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}