import React from 'react';

import CityItem from '../components/CityItem';

const CityList = props => {
    if (props.cities.length === 0) {
        return (
            <div>
                <p>No cities found!</p>
            </div>
        )
    }

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

export default CityList;