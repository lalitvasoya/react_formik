import { combineReducers } from "redux";
import {countReducer} from '../store/countReducer';

const initialState = {
    const: 0
}

const rootReducer = combineReducers({
    count: countReducer
})

export {initialState, rootReducer}
