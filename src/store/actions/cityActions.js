export function fetchCities() {
  return dispatch => {
    dispatch(fetchCitiesBegin());
    fetch("http://localhost:5000/api/cities/all")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCitiesSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchCitiesFailure(error));
      });
  };
}

export const fetchCitiesBegin = () => {
  return {
    type: FETCH_CITIES_BEGIN
  };
};

export const fetchCitiesSuccess = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: { cities }
});

export const fetchCitiesFailure = error => ({
  type: FETCH_CITIES_FAILURE,
  payload: { error }
});

export const FETCH_CITIES_BEGIN = "FETCH_CITIES_BEGIN";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_FAILURE = "FETCH_CITIES_FAILURE";
