import {combineReducers} from "redux";
import todoReducer from "./todoReducer";

const combineAllReducers = combineReducers({
    todoReducer
});

export default combineAllReducers;
