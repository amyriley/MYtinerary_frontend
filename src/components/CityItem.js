import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const CityItem = props => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.cityName}</Typography>
        <Typography>{props.country}</Typography>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/itineraries/${props.cityId}`}
          size="small"
        >
          View Itineraries
        </Button>
      </CardActions>
    </Card>
  );
};

export default CityItem;
