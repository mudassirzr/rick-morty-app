import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from 'state/reducers/charactersReducer'
import episodesReducer from 'state/reducers/episodesReducer'
import locationsReducer from 'state/reducers/locationsReducer'

const reducers = combineReducers(
    {
        characters: charactersReducer,
        episodes: episodesReducer,
        locations: locationsReducer
    }
)

export type State = ReturnType<typeof reducers>;
export default reducers