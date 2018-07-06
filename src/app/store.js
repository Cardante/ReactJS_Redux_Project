import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';

import promise from "redux-promise-middleware";

//For assync calls
import thunk from "redux-thunk";

export default  createStore(
    combineReducers({
        mathReducer, userReducer
    }), 
    {}, 
    applyMiddleware(logger, thunk, promise())
);