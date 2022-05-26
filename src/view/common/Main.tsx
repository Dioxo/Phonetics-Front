import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { Explanations } from "../components/Explanations/Explanations"
import { Categories } from "../components/Categories/Categories"
import { Categorie } from "../components/Categorie/Categorie";
import { Exercices } from "../components/Exercices/Exercices"
import { Exercice } from "../components/Exercice/Exercice";

export function Main() {
	return (
		<Routes>
			{" "}
			{/* The Routes decides which component to show based on the current URL.*/}
			<Route path="/" element={<Navigate replace to="/welcome" />}/>
			<Route path="/welcome" element={<Welcome />} />
            <Route path="/explanations" element={<Explanations/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/categories-:id" element={<Categorie/>}/> {/* TODO Alex remplacer "-" par "/" */}
            <Route path="/exercices" element={<Exercices/>}/>
            <Route path="/exercices-:id" element={<Exercice/>}/> {/* TODO Alex remplacer "-" par "/" */}
		</Routes>
	);
}
