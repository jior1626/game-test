import { Letter } from "./global-state.interface";

export interface AddLetter {
    type: 'ADD_LETTER';
    payload: Letter;
}

export interface PressLetter {
    type: 'PRESS_LETTER';
    payload: Letter;
}

export type ActionTypes = AddLetter | PressLetter;