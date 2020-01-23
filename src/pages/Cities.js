import React, { Component, Fragment } from 'react';

import FilterForm from '../components/UIElements/FilterForm';
import CityList from '../components/CityList';
import MainFooter from '../components/Navigation/MainFooter';

export default class Cities extends Component {
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
    
    fetchCities = () => {
        this.setState({...this.state, isFetching: true});
        fetch('http://localhost:5000/cities/all')
          .then(results => results.json())
          .then(result => this.setState({cities: result, isFetching: false}))
          .then(r => console.log(this.state))
          .catch(e => console.log(e))
          this.setState({...this.state, isFetching: false});
      }
}
