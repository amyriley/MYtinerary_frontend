import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ItineraryItem = props => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.itinerary.title}</Typography>
        <Typography>{props.itinerary.cost}</Typography>
        <Typography>{props.itinerary.duration}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItineraryItem;
