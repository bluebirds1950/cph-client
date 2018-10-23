import {
    LOAD_FLIGHT_SUCCEED,
    LOAD_FLIGHT_FAILED
} from '../constant';

const initialState = {
    flights: [],
    error: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_FLIGHT_SUCCEED:
        console.log('in here', action, state)
        console.log('creality check here !', {...state,error: false,flights: action.flights})
            return {
                ...state,
                error: false,
                flights: action.flights
            };
        case LOAD_FLIGHT_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}
