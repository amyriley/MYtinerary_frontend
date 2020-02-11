import {
  FETCH_ITINERARIES_BEGIN,
  FETCH_ITINERARIES_SUCCESS,
  FETCH_ITINERARIES_FAILURE
} from "../actions/itineraryActions";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ITINERARIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.itineraries
      };

    case FETCH_ITINERARIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
