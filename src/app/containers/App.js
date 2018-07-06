import React from "react";
import {connect} from "react-redux";
import { User } from '../components/User';
import { Main } from '../components/Main';

import { setName } from '../actions/userActions';


class App extends React.Component {
    
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                {/*Passes the user from mapToStateProps*/}
                <User username={this.props.user.name}/>
            </div>
        );
    }
    
}

//INDEX.JS -> GLOBAL STATE
//Which properties of my global application state that i want to use, which reducers are to be used in
const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer,
    };
};

//Which actions we want to use in the component
const mapDispatchToProps = (dispatch) => {
    return {
        //Method which receives a name and send it to the index.js
        setName: (name) => {
            dispatch(setName(name));
        }
    };
};

//Connects reactjs with redux, exports it to be available outside
export default connect(mapStateToProps, mapDispatchToProps)(App);