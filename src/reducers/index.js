import {combineReducers} from "redux";
import todoReducer from "./todoReducer";

const combineAllReducers = combineReducers({
    todoData: todoReducer
});

export default combineAllReducers;
