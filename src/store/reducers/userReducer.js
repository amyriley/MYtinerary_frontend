import {
  FETCH_USERS_BEGIN,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  SET_CURRENT_USER
} from "../actions/userActions";

const empty = require("is-empty");

const initialState = {
  currentUser: {},
  isAuthenticated: false,
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
        items: action.payload
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !empty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
}
