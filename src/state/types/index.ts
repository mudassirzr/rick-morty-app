import { CharactersActionTypes } from "state/action-types"

export interface CharactersSetDataAction {
    type: CharactersActionTypes.SET_CHARACTERS_DATA;
    payload: charactersState
}
export interface CharactersClearDataAction {
    type: CharactersActionTypes.CLEAR_CHARACTERS_DATA;
}
export type CharactersActions = CharactersSetDataAction | CharactersClearDataAction;

export interface characterLocation {
    name: string;
    id: string;
} 
export interface characterOrigin {
    name: string;
    id: string;
}
export interface characterEpisode {
    name: string;
    id: string;
}
export interface characterResult {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: characterOrigin
    location: characterLocation
    image: string
    episode: characterEpisode[]
    created: string
}

export interface locationState {    
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    created: string
}
export interface episodeState {  
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    created: string
}
export interface charactersInfo {
    count: number,
    pages: number,
    next: number | null,
    prev: number | null
}

export type charactersState = {
    results: characterResult[]
    info: charactersInfo
}
export type locationsState = locationState[]
export type episodesState = episodeState[]