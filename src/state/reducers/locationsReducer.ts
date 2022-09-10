import { LocationsActionTypes } from "state/action-types";
import { locationsState, LocationsActions, locationResult, locationsResults } from "state/types";

const initialState = {
    results: {},
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }
}
const reducer = (state: locationsState = initialState, action: LocationsActions) => {
    switch (action.type) {
        case LocationsActionTypes.SET_LOCATIONS_DATA:
            let locationResults: locationsResults  = {}
            action.payload.results.forEach((location: locationResult) => {
                locationResults[location.id] = location
            })
            return {...state, results: locationResults, info: action.payload.info};
        case LocationsActionTypes.CLEAR_LOCATIONS_DATA:
            return {...initialState};
        default:
            return state;
    }
}
export default reducer;