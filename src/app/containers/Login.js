import React from "react";
import { connect } from "react-redux";
import { LoginForm } from '../components/LoginForm'

import { checkUser } from '../actions/loginActions'

class Login extends React.Component {

    render() {
        return (
            <div id="login_container">
                <LoginForm checkCredentials={()=> this.props.checkUser({username: "diogo", password:"cardante"})}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.loginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkUser: (credentials) => {
            dispatch(checkUser(credentials));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)