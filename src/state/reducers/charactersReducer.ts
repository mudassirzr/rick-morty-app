import { CharactersActionTypes } from "state/action-types";
import { charactersState, CharactersActions, characterResult, charactersResults } from "state/types";

const initialState = {
    results: {},
    info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
    }
}
const reducer = (state: charactersState = initialState, action: CharactersActions) => {
    switch (action.type) {
        case CharactersActionTypes.SET_CHARACTERS_DATA:
            let characterResults: charactersResults  = {}
            action.payload.results.forEach((character: characterResult) => {
                characterResults[character.id] = character
            })
            return {...state, results: characterResults, info: action.payload.info};
        case CharactersActionTypes.CLEAR_CHARACTERS_DATA:
            return {...initialState};
        default:
            return state;
    }
}
export default reducer;