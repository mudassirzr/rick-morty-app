import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from 'state/reducers/charactersReducer'

const reducers = combineReducers(
    {
        characters: charactersReducer,
    }
)

export type State = ReturnType<typeof reducers>;
export default reducers