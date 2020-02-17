import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ActivityItem from "../components/ActivityItem";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ActivityCarousel = props => {
  return (
    <Carousel responsive={responsive}>
      {props.activities.map(activity => (
        <ActivityItem title={activity.title} />
      ))}
    </Carousel>
  );
};

export default ActivityCarousel;
