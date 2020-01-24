import { FETCH_CITIES_PENDING, FETCH_CITIES_SUCCESS, FETCH_CITIES_ERROR } from '../actions/cityActions';

const initState = {
    pending: false,
    cities: [],
    error: null
}

const cityReducer = (state = initState, action) => {
    switch(action.type) {
        case FETCH_CITIES_PENDING:
            return {
                ...state,
                pending: true
            }

        case FETCH_CITIES_SUCCESS:
            return {
                ...state,
                pending: false,
                cities: action.payload
            }

        case FETCH_CITIES_ERROR:
            return {
                ...state,
                pending: false,
                cities: action.error
            }

        default: 
            return state;
    }
}

export const getCities = state => state.cities;
export const getCitiesPending = state => state.pending;
export const getCitiesError = state => state.error;