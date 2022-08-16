import { Dispatch } from "redux";
import { CharactersActionTypes } from "state/action-types";
import { charactersState, CharactersClearDataAction, CharactersSetDataAction } from "state/types";

export const setCharactersData = (state: charactersState) =>{
    return (dispatch: Dispatch<CharactersSetDataAction>) => {
        dispatch({
            type: CharactersActionTypes.SET_CHARACTERS_DATA,
            payload: state
        })
    }
}

export const clearCharactersData = () =>{
    return (dispatch: Dispatch<CharactersClearDataAction>) => {
        dispatch({
            type: CharactersActionTypes.CLEAR_CHARACTERS_DATA,
        })
    }
}