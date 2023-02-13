import { ActionTypes } from "./actions";
import { GlobalState, Letter } from "./global-state.interface";

const initialState: GlobalState = {
    letters: [],
    search: '',
}

export function reducer(state = initialState, action: ActionTypes): GlobalState {
    switch (action.type) {
        case "ADD_LETTER": {
            const letters = state.letters;
            letters.push({...action.payload})
            return {...state, letters: [...letters] }
        }
    }
    return state;
}