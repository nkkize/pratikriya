import React from "react";
import ReactDOM from "react-dom";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import storeConfig from "./reducers/storeConfig";

const store = storeConfig();

const MountApp = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
}

ReactDOM.render(<MountApp/> , document.getElementById("root"));
