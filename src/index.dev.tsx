import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { AppContainer } from "./view/common/AppContainer";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "./view/components/Welcome/Welcome";
import { Categories } from "./view/components/Categories/Categories";
import { Exercices } from "./view/components/Exercices/Exercices";
import { Categorie } from "./view/components/Categorie/Categorie";
import { Exercice } from "./view/components/Exercice/Exercice";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history } from "./store/index";

function App() {
	return (
		<AppContainer endpoints={window.config.endpoints}>
			<Router history={history}>
				<div style={{ width: "80%", margin: "0 auto" }}>
					<Routes>
						<Route path="/" element={<Welcome />}>
							<Route path="explanations" element={<Categories />} />
							<Route path="categorie/:id" element={<Categorie />} />{" "}
							<Route path="exercices" element={<Exercices />} />
							<Route path="exercice/:id" element={<Exercice />} />{" "}
						</Route>
					</Routes>
				</div>
			</Router>
		</AppContainer>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
