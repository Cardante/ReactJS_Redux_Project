/*import { createStore } from 'redux';

const initialState = {
    result: 1,
    lastValues: []
}

//Take an action -> change state
const reducer = (state = initialState, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case 'ADD':
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result + action.payload, // it will only update the value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            state.lastValues.push(action.payload);
            break;
    }

    //it will return the new state
    console.log("STATE UPDATED: ", state.result);
    return state;
}

//Will store the state from the reducer (the reducer will give the new state), it tells the store who´s responsible fro changing the state
const store = createStore(reducer);

//This is called any time a action is dispatch
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
});

//will dispatch the action with type ADD
store.dispatch({
    type: "ADD", //type of the action that the recuder will process
    payload: 10 //payload, the values that the reducer will receive from processing 
});

//will dispatch the action with type SUBTRACT
store.dispatch({
    type:"SUBTRACT",
    payload: 10
});*/

/*import { createStore, combineReducers } from 'redux';

//Take an action -> change state
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case 'ADD':
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result + action.payload, // it will only update the value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }

    //it will return the new state
    console.log("STATE UPDATED: ", state.result);
    return state;
}

//Take an action -> change state
const userReducer = (state = {
    name: "Diogo",
    age: 27
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                age: action.payload
            };
            break;
    }

    return state;
}

//Will store the state from the reducers (the reducer will give the new state), it tells the store who´s responsible fro changing the state
const store = createStore(combineReducers({mathReducer, userReducer}));

//This is called any time a action is dispatch
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
});


//IMPORTANT USE UNIQUE TYPES, SO THERE IS NO CONFUSION IN TYPES WITH THE SAME NAME ON THOW OR MORE REDUCERS

//will dispatch the action with type ADD
store.dispatch({
    type: "ADD", //type of the action that the recuder will process
    payload: 10 //payload, the values that the reducer will receive from processing 
});

//will dispatch the action with type SUBTRACT
store.dispatch({
    type:"SUBTRACT",
    payload: 10
});

store.dispatch({
    type:"SET_AGE",
    payload:30
});*/

/*import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";

//Take an action -> change state
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case 'ADD':
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result + action.payload, // it will only update the value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }

    //it will return the new state
    console.log("STATE UPDATED: ", state.result);
    return state;
}

//Take an action -> change state
const userReducer = (state = {
    name: "Diogo",
    age: 27
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                age: action.payload
            };
            break;
    }

    return state;
}

//It will log every action taken, we dont need this becaus we have the logger middleware
//const myLogger = (store) => (next) => (action) => {
//    console.log("Log Action: ", action);
//    //Next Action, update state, IMPORTANT
//    next(action);
//}

//Will store the state from the reducers (the reducer will give the new state), it tells the store who´s responsible fro changing the state
//First argument, sets the reducer, the second is the initial state, the third the middleware
const store = createStore(
    combineReducers({mathReducer, userReducer}), 
    {}, 
    applyMiddleware(logger)
);

//This is called any time a action is dispatch
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
});


//IMPORTANT USE UNIQUE TYPES, SO THERE IS NO CONFUSION IN TYPES WITH THE SAME NAME ON THOW OR MORE REDUCERS

//will dispatch the action with type ADD
store.dispatch({
    type: "ADD", //type of the action that the recuder will process
    payload: 10 //payload, the values that the reducer will receive from processing 
});

//will dispatch the action with type SUBTRACT
store.dispatch({
    type:"SUBTRACT",
    payload: 10
});

store.dispatch({
    type:"SET_AGE",
    payload:30
});*/


//This is the main store

/*import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from "redux-logger";
import { Provider } from "react-redux"

import App from "./container/App";

//Take an action -> change state
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case 'ADD':
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result + action.payload, // it will only update the value
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }

    //it will return the new state
    console.log("STATE UPDATED: ", state.result);
    return state;
}

//Take an action -> change state
const userReducer = (state = {
    name: "Diogo",
    age: 27
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case "SET_NAME":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state, //all the properties from the state (result, lastvalues);
                age: action.payload
            };
            break;
    }

    return state;
}

//It will log every action taken, we dont need this becaus we have the logger middleware
//const myLogger = (store) => (next) => (action) => {
//    console.log("Log Action: ", action);
//    //Next Action, update state, IMPORTANT
//    next(action);
//}

//Will store the state from the reducers (the reducer will give the new state), it tells the store who´s responsible fro changing the state
//First argument, sets the reducer, the second is the initial state, the third the middleware
const store = createStore(
    combineReducers({mathReducer, userReducer}), 
    {}, 
    applyMiddleware(logger)
);

//This is called any time a action is dispatch
store.subscribe(() => {
    console.log("Store updated: ", store.getState());
});

render(
    //This will conect the store to the app
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app')
);*/

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux"

import App from "./containers/App";
import store from './store';

render(
    //This will conect the store to the app
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app')
);