import {CONCAT_CHARACTER} from './EnglishKeyboardActionTypes'

const initial_state = {
    word: "",
}

const EnglishKeyboardReducers = (state = initial_state, action) => {
    switch (action.type) {
        case CONCAT_CHARACTER:
            return {
                ...state,
                word: action.payload
            }
            default: return state
    }
}

export default EnglishKeyboardReducers