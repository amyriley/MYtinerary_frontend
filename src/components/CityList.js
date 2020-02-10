import React, { Component } from "react";

import CityItem from "../components/CityItem";

class CityList extends Component {
  render() {
    const { cities, filteredCities } = this.props;

    if (filteredCities.length === 0) {
      return (
        <div className="city-list">
          {cities.map(city => (
            <CityItem key={city._id} cityName={city.cityName} />
          ))}
        </div>
      );
    }

    return (
      <div className="city-list">
        {filteredCities.map(city => (
          <CityItem key={city._id} cityName={city.cityName} />
        ))}
      </div>
    );
  }
}

export default CityList;
