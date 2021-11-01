import {CONCAT_CHARACTER,CURRENT_KEY} from './EnglishKeyboardActionTypes'

const initial_state = {
    word: "",
    selectedKey:""
}

const EnglishKeyboardReducers = (state = initial_state, action) => {
    switch (action.type) {
        case CONCAT_CHARACTER:
            return {
                ...state,
                word: action.payload
            }
        case CURRENT_KEY:
            return{
                ...state,
                selectedKey:action.payload
            }
            default: return state
    }
}

export default EnglishKeyboardReducers