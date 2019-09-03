import { createStore, applyMiddleware } from 'redux';

import reducers from "../reducers";
//INFO: this provides 3 events =>
// 1. pending
// 2. fulfilled
// 3. rejected
import promiseMiddlewares from "redux-promise-middleware";

function configureStore(){
    //return createStore(reducers);
    const middleware = [promiseMiddlewares];
    return createStore(reducers, applyMiddleware(...middleware));
}

export default configureStore;

