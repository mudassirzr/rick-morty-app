import { EpisodesActionTypes } from "state/action-types";
import { episodesState, EpisodesActions, episodeResult, episodesResults } from "state/types";

const initialState = {
    results: {},
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }
}
const reducer = (state: episodesState = initialState, action: EpisodesActions) => {
    switch (action.type) {
        case EpisodesActionTypes.SET_EPISODES_DATA:
            let episodeResults: episodesResults  = {}
            action.payload.results.forEach((episode: episodeResult) => {
                episodeResults[episode.id] = episode
            })
            return {...state, results: episodeResults, info: action.payload.info};
        case EpisodesActionTypes.CLEAR_EPISODES_DATA:
            return {...initialState};
        default:
            return state;
    }
}
export default reducer;