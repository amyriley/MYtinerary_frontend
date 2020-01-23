import React from 'react';

import CityItem from '../components/CityItem';

const CityList = props => {
    if (props.filteredCities.length === 0) {
        return (
        <div className="city-list">
            {props.cities.map(city => (
                <CityItem 
                    key={city._id} 
                    cityName={city.cityName} 
                />
            ))}
        </div>
        )
    }

    return (
        <div className="city-list">
            {props.filteredCities.map(city => (
                <CityItem 
                    key={city._id} 
                    cityName={city.cityName} 
                />
            ))}
        </div>
    )

}

export default CityList;