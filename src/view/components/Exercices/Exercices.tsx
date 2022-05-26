import React from "react";
import { Link } from "react-router-dom";

export const Exercices = () => {
	const categories = [
		{
			id: 1,
			name: "The big round O",
			video: "todo",
		},
		{
			id: 2,
			name: "The non-rhotic R",
			video: "todo",
		},
		{
			id: 3,
			name: "The A in CAT",
			video: "todo",
		},
		{
			id: 4,
			name: "A T is a T",
			video: "todo",
		},
		{
			id: 5,
			name: "The long A",
			video: "todo",
		},
		{
			id: 6,
			name: "The short O",
			video: "todo",
		},
	];

	return (
		<div>
			<h1>Choose your exercices categorie 👇</h1>
			<ul>
				{categories.map((categorie) => (
					<li key={categorie.id}>
						<Link to={"/exercices-" + categorie.id}> {/* TODO Alex remplacer "-" par "/" */}
							<p>{categorie.name}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
