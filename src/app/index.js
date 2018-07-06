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