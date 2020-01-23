import React, { Component } from 'react';

import { cities } from '../pages/Cities';
import CityList from './CityList';

class VisibleCities extends Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            filteredCities: []
        }
    }

    componentWillMount() {
        this.setState({
            cities,
            filteredCities: cities
        })
    }



    render() {
        return (
            <CityList cities={this.state.filteredCities} onChange={this.filterCities} />
        )
    }
}

export default VisibleCities;