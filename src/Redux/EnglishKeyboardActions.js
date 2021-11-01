import {CONCAT_CHARACTER,CURRENT_KEY} from './EnglishKeyboardActionTypes'
export const concatCharacter=character=>{
    return{
        type:CONCAT_CHARACTER,
        payload:character
    }
}

export const currentKey=character=>{
    return{
        type:CURRENT_KEY,
        payload:character
    }
}


