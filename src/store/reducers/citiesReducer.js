import {
  FETCH_CITIES_BEGIN,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from "../actions/cityActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.cities
      };

    case FETCH_CITIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
