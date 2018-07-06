const credState = {
    credentials: {},
};

const loginReducer = (state = credState, action) => {
    console.log("REDUCER HERE: ", action.payload)
    switch(action.type) {
        case 'SET_CREDENTIALS':
        state = {
            ...state,
            credentials: action.payload
        };
        break;
    } 

    return state;
}

export default loginReducer;