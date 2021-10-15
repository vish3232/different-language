import {CONCAT_CHARACTER} from './EnglishKeyboardActionTypes'
export const concatCharacter=character=>{
    return{
        type:CONCAT_CHARACTER,
        payload:character
    }
}