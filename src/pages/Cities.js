import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import FilterForm from "../components/UIElements/FilterForm";
import { fetchCities } from "../store/actions/cityActions";
import CityList from "../components/CityList";
import MainFooter from "../components/Navigation/MainFooter";

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCities: []
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCities());
  }

  filterCities = cityFilter => {
    let filteredCities = this.props.cities;
    filteredCities = filteredCities.filter(city => {
      let cityName = city.cityName.toLowerCase();
      return cityName.startsWith(cityFilter.toLowerCase());
    });
    this.setState({
      filteredCities
    });
  };

  render() {
    const { cities } = this.props;

    return (
      <Fragment>
        <FilterForm onChange={this.filterCities} />
        <CityList filteredCities={this.state.filteredCities} cities={cities} />
        <MainFooter />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.cities.items,
  loading: state.cities.loading,
  error: state.cities.error
});

export default connect(mapStateToProps)(Cities);
