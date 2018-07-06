import React from "react";

export const LoginForm = (props) => {
    return (
        <div id="login_panel" className="panel panel-default">
            <div className="panel-body">
                <form>
                    <input className="form-control" type="text" placeholder="Username" />
                    <input className="form-control" type="text" placeholder="Password" />
                    <button id="signin" className="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}