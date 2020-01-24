export const FETCH_CITIES_PENDING = 'FETCH_CITIES_PENDING';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR';

function fetchProductsPending() {
  return {
    type: FETCH_CITIES_PENDING
  }
}

function fetchProductsSuccess() {
  return {
    type: FETCH_CITIES_SUCCESS
  }
}

function fetchProductsError() {
  return {
    type: FETCH_CITIES_ERROR
  }
}

// const createCity = (city) => {
//     return (dispatch, getState) => {
//         // make async call to database
//         dispatch({ type: 'CREATE_CITY', cities })
//     }
// }