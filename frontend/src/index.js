import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* WIKI: ReactDOM provides DOM-specific methods that can be used at the top level 
of your app and as an escape hatch to get outside of the React model if you need to. */
ReactDOM.render(<App />, document.getElementById("root"));
