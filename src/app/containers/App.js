import React from "react";
import {connect} from "react-redux";

import Login from './Login'

import { setName } from '../actions/userActions';

class App extends React.Component {
    render() {
        return (
            <div id="main_container" className="container-fluid">
                <Login />
            </div>
        );
    }
}

// <Main changeUsername={() => this.props.setName("Anna")}/>
// {/*Passes the user from mapToStateProps*/}
// <User username={this.props.user.name}/>

//INDEX.JS -> GLOBAL STATE
//Which properties of my global application state that i want to use, which reducers are to be used in
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
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