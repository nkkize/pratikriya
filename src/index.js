import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import storeConfig from "./reducers/storeConfig";

const store = storeConfig();

const MountApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<MountApp/> , document.getElementById("root"));
