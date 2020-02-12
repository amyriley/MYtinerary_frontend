export function fetchItineraries(cityId) {
  return dispatch => {
    dispatch(fetchItinerariesBegin());
    fetch(`http://localhost:5000/cities/${cityId}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchItinerariesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchItinerariesFailure(error));
      });
  };
}

export const fetchItinerariesBegin = () => {
  return {
    type: FETCH_ITINERARIES_BEGIN
  };
};

export const fetchItinerariesSuccess = itineraries => ({
  type: FETCH_ITINERARIES_SUCCESS,
  payload: { itineraries }
});

export const fetchItinerariesFailure = error => ({
  type: FETCH_ITINERARIES_FAILURE,
  payload: { error }
});

export const FETCH_ITINERARIES_BEGIN = "FETCH_ITINERARIES_BEGIN";
export const FETCH_ITINERARIES_SUCCESS = "FETCH_ITINERARIES_SUCCESS";
export const FETCH_ITINERARIES_FAILURE = "FETCH_ITINERARIES_FAILURE";
