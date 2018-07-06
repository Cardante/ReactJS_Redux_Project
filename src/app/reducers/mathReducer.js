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

    return state;
}

//Take an action -> change state
export default mathReducer;