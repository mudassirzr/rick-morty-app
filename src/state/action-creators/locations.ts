import { Dispatch } from "redux";
import { LocationsActionTypes } from "state/action-types";
import { locationsPayload, LocationsClearDataAction, LocationsSetDataAction } from "state/types";

export const setLocationsData = (state: locationsPayload) =>{
    return (dispatch: Dispatch<LocationsSetDataAction>) => {
        dispatch({
            type: LocationsActionTypes.SET_LOCATIONS_DATA,
            payload: state
        })
    }
}

export const clearLocationsData = () =>{
    return (dispatch: Dispatch<LocationsClearDataAction>) => {
        dispatch({
            type: LocationsActionTypes.CLEAR_LOCATIONS_DATA,
        })
    }
}