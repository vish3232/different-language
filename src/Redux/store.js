import { createStore, combineReducers } from "redux"
// import thunk from "redux-thunk"
import EnglishKeyboardReducers from './EnglishKeyboardReducers'
const rootReducer = combineReducers({
   EnglishKeyboard:EnglishKeyboardReducers
})

const store = createStore(rootReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store