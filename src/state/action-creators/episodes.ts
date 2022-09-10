import { Dispatch } from "redux";
import { EpisodesActionTypes } from "state/action-types";
import { episodesPayload, EpisodesClearDataAction, EpisodesSetDataAction } from "state/types";

export const setEpisodesData = (state: episodesPayload) =>{
    return (dispatch: Dispatch<EpisodesSetDataAction>) => {
        dispatch({
            type: EpisodesActionTypes.SET_EPISODES_DATA,
            payload: state
        })
    }
}

export const clearEpisodesData = () =>{
    return (dispatch: Dispatch<EpisodesClearDataAction>) => {
        dispatch({
            type: EpisodesActionTypes.CLEAR_EPISODES_DATA,
        })
    }
}