import React, { Component } from "react";
import ItineraryItem from "../components/ItineraryItem";

class ItineraryList extends Component {
  render() {
    const { itineraries } = this.props;

    return (
      <div>
        {itineraries.map(itinerary => (
          <ItineraryItem key={itinerary._id} itinerary={itinerary} />
        ))}
      </div>
    );
  }
}

export default ItineraryList;
