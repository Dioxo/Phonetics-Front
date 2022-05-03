import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { AppContainer } from "./view/common/AppContainer";

function App() {
	return (
		<AppContainer endpoints={window.config.endpoints}>React Template</AppContainer>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
