import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { AppContainer } from "./view/common/AppContainer";
import { BrowserRouter } from 'react-router-dom';
import { Main } from "./view/common/Main";

function App() {
	return (
		<AppContainer endpoints={window.config.endpoints}>
            <div className="App">
                <Main />
            </div>
		</AppContainer>
	);
}

ReactDOM.render((
    <BrowserRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
    ), document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
