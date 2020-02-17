import React, { Component } from "react";
import ActivityCarousel from "../components/ActivityCarousel";
import ItineraryItem from "../components/ItineraryItem";

export default class ItineraryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div>
        <ItineraryItem toggle={this.toggleVisibility} />
        {this.state.visibility ? <ActivityCarousel /> : null}
      </div>
    );
  }
}
