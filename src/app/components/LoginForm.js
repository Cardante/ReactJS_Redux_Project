import React from "react";

export const LoginForm = (props) => {

    return (
        <div id="login_panel" className="panel panel-default">
            <div className="panel-body">
                <form>
                    <input className="form-control" type="text" placeholder="Username" />
                    <input className="form-control" type="password" placeholder="Password" />
                </form>
                <button id="signin" className="btn btn-primary" onClick={() => props.checkCredentials({username: "diogo", password:"cardante"})}>Sign in</button>
            </div>
        </div>
    )
}