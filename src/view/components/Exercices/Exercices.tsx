import React from "react";
import Link from "../../common/Link";
import { useAppDispatch } from "../../../store";

export const Exercices = () => {
	const categories = [
		{
			name: "The big round O",
			video: "todo",
		},
		{
			name: "The non-rhotic R",
			video: "todo",
		},
		{
			name: "The A in CAT",
			video: "todo",
		},
		{
			name: "A T is a T",
			video: "todo",
		},
		{
			name: "The long A",
			video: "todo",
		},
		{
			name: "The short O",
			video: "todo",
		},
	];

	const dispatch = useAppDispatch();

	return (
		<div>
			<h1>Choose your exercices categorie 👇</h1>
			<ul>
				{categories.map((categorie, i) => (
					<li key={i}>
						<Link to={"/exercice/" + i} text={categorie.name} />
					</li>
				))}
			</ul>
		</div>
	);
};
