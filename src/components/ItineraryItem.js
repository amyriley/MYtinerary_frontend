import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Carousel from "../components/ActivityCarousel";

export default class ItineraryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
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
      <React.Fragment>
        <Card onClick={this.handleClick}>
          <CardContent>
            <Typography>{this.props.itinerary.title}</Typography>
            <Typography>{this.props.itinerary.cost}</Typography>
            <Typography>{this.props.itinerary.duration}</Typography>
            {this.state.active && (
              <Carousel activities={this.props.itinerary.activities} />
            )}
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
