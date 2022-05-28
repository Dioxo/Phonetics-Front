import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-toastify/dist/ReactToastify.min.css";
import { AppContainer } from "./view/common/AppContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Welcome } from "./view/components/Welcome/Welcome";
import { Explanations } from "./view/components/Explanations/Explanations";
import { Categories } from "./view/components/Categories/Categories";
import { Exercices } from "./view/components/Exercices/Exercices";
import { Categorie } from "./view/components/Categorie/Categorie";
import { Exercice } from "./view/components/Exercice/Exercice";

function App() {
	return (
		<AppContainer endpoints={window.config.endpoints}>
			<div className="App">
				<Routes>
					{/* The Routes decides which component to show based on the current URL.*/}
					<Route path="/" element={<Welcome />} />
					<Route path="/explanations" element={<Explanations />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/categories/:id" element={<Categorie />} />{" "}
					<Route path="/exercices" element={<Exercices />} />
					<Route path="/exercices/:id" element={<Exercice />} />{" "}
				</Routes>
			</div>
		</AppContainer>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
