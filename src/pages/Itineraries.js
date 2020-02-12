import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
import { Link } from "react-router-dom";
import ItineraryList from "../components/ItineraryList";
import MainFooter from "../components/Navigation/MainFooter";

class Itineraries extends Component {
  componentDidMount() {
    const { cityId } = this.props.match.params;
    this.props.dispatch(fetchItineraries(cityId));
  }

  render() {
    const { itineraries } = this.props;
    console.log(itineraries);

    return (
      <React.Fragment>
        <ItineraryList itineraries={itineraries} />
        <Link to="/cities">Choose another city...</Link>
        <MainFooter />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries.items,
  loading: state.itineraries.loading,
  error: state.itineraries.error
});

export default connect(mapStateToProps)(Itineraries);
