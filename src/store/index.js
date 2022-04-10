import { combineReducers } from "redux";
import authReducer from "./auth"
import counterReducer from "./counter"
import {createStore} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    counter: counterReducer,
})

const store = createStore(rootReducer)

export default store