import React, { Component, Fragment } from 'react';

import MainHeader from '../components/Navigation/MainHeader';
import CityList from '../components/CityList';

export default class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
            isFetching: false
        }

    }

    render() {
        return (
            <Fragment>
                <MainHeader />
                <CityList cities={this.state.cities} />
            </Fragment>
        )
    }

    componentDidMount() {
        this.fetchCities();
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
