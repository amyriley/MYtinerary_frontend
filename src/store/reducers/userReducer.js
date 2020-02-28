import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "../actions/userActions";

const initialState = {
  currentUser: {},
  items: [],
  loading: false,
  error: null
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.user
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case LOGIN_USER_BEGIN:
      return {
        ...state,
        currentUser: action.payload
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.user
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
