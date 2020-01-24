import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchCities } from '../store/actions/cityActions';
import FilterForm from '../components/UIElements/FilterForm';
import CityList from '../components/CityList';
import MainFooter from '../components/Navigation/MainFooter';
import fetchCitiesAction from 'fetchCities';
import { getCitiesError, getCities, getProductsPending } from '../store/reducers/citiesReducer';

class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            filteredCities: [],
            isFetching: false
        }

    }

    render() {
        return (
            <Fragment>
                <FilterForm onChange={this.filterCities} />
                <CityList filteredCities={this.state.filteredCities} cities={this.state.cities} />
                <MainFooter />
            </Fragment>
        )
    }

    componentDidMount() {
        this.fetchCities();
    }

        filterCities = (cityFilter) => {
        let filteredCities = this.state.cities;
        filteredCities = filteredCities.filter((city) => {
            let cityName = city.cityName.toLowerCase();
            return cityName.startsWith(
                cityFilter.toLowerCase())
        })
        this.setState({
            filteredCities
        })
        console.log("filtered " + this.state.filteredCities)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: () => dispatch(fetchCities)
    }
}

export default connect(null, mapDispatchToProps)(Cities);
