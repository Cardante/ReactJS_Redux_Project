const userReducer = (state = {
    name: "Diogo",
    age: 27
}, action) =>{
    console.log("ACTION PAYLOAD: ", action.payload);
    switch(action.type) {
        case "SET_NAME_FULFILLED":
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

//Take an action -> change state
export default userReducer;