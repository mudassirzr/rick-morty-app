import { CharactersActionTypes, EpisodesActionTypes, LocationsActionTypes } from "state/action-types"

export interface CharactersSetDataAction {
    type: CharactersActionTypes.SET_CHARACTERS_DATA;
    payload: charactersPayload
}
export interface CharactersClearDataAction {
    type: CharactersActionTypes.CLEAR_CHARACTERS_DATA;
}
export type CharactersActions = CharactersSetDataAction | CharactersClearDataAction;

export interface EpisodesSetDataAction {
    type: EpisodesActionTypes.SET_EPISODES_DATA;
    payload: episodesPayload
}
export interface EpisodesClearDataAction {
    type: EpisodesActionTypes.CLEAR_EPISODES_DATA;
}
export type EpisodesActions = EpisodesSetDataAction | EpisodesClearDataAction;

export interface LocationsSetDataAction {
    type: LocationsActionTypes.SET_LOCATIONS_DATA;
    payload: locationsPayload
}
export interface LocationsClearDataAction {
    type: LocationsActionTypes.CLEAR_LOCATIONS_DATA;
}
export type LocationsActions = LocationsSetDataAction | LocationsClearDataAction;

export interface characterLocation {
    name: string;
    id: number;
} 
export interface characterOrigin {
    name: string;
    id: number;
}
export interface characterEpisode {
    name: string;
    id: number;
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

export interface locationResidents {
    name: string;
    id: number;
}

export interface locationResult {    
    id: number
    name: string
    type: string
    dimension: string
    residents: locationResidents[]
    created: string
}

export interface episodeCharacters extends locationResidents {
}


export interface episodeResult {  
    id: number
    name: string
    air_date: string
    episode: string
    characters: episodeCharacters[]
    created: string
}

export interface info {
    count: number,
    pages: number,
    next: number | null,
    prev: number | null
}
export interface charactersInfo extends info {
    
}
export interface episodesInfo extends info {

}
export interface locationsInfo extends info {

}

export interface charactersResults {
    [id: number]: characterResult
}
export interface charactersState {
    results: charactersResults
    info: charactersInfo
}
export interface charactersPayload {
    results: characterResult[]
    info: charactersInfo
}

export interface locationsResults {
    [id: number]: locationResult
}

export type locationsState = {
    results: locationsResults,
    info: locationsInfo
}
export interface locationsPayload {
    results: locationResult[]
    info: locationsInfo
}

export interface episodesResults {
    [id: number]: episodeResult
}

export type episodesState = {
    results: episodesResults,
    info: episodesInfo
}
export interface episodesPayload {
    results: episodeResult[]
    info: episodesInfo
}