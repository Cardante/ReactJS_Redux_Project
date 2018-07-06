import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import loginReducer from './reducers/loginReducer';
import userReducer from './reducers/userReducer';


import promise from "redux-promise-middleware";

//For assync calls
import thunk from "redux-thunk";

export default  createStore(
    combineReducers({
        userReducer,
        loginReducer
    }), 
    {}, 
    applyMiddleware(logger, thunk, promise())
);