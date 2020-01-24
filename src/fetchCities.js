import {fetchCitiesPending, fetchCitiesSuccess, fetchCitiesError} from '../src/store/actions';

const fetchCities = () => {
  return (dispatch) => {
        dispatch(fetchCitiesPending());
        fetch('http://localhost:5000/cities/all')
        .then(results => results.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(fetchCitiesSuccess(res.cities));
            return res.cities;
        })
        .catch(error => {
            dispatch(fetchCitiesError(error));
        })
  }
}

export default fetchCities;