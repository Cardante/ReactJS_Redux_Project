import React from "react";

import { LoginForm } from '../components/LoginForm'


export class Login extends React.Component {
    render() {
        return (
            <div id="login_container">
                <LoginForm />
            </div>
        );
    }
}