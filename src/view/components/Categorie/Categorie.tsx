import React from "react";
import { Link, useParams } from "react-router-dom";

export const Categorie = () => {
	const categories = [
		{
			id: 1,
			name: "The big round O",
			video: "https://todo.todo",
		},
		{
			id: 2,
			name: "The non-rhotic R",
			video: "https://todo.todo",
		},
		{
			id: 3,
			name: "The A in CAT",
			video: "https://todo.todo",
		},
		{
			id: 4,
			name: "A T is a T",
			video: "https://todo.todo",
		},
		{
			id: 5,
			name: "The long A",
			video: "https://todo.todo",
		},
		{
			id: 6,
			name: "The short O",
			video: "https://todo.todo",
		},
	];

    const { id } = useParams();
    const categorie = categories.filter(c => c.id.toString() === id)[0];

	return (
		<div>
			<h1>Short videos – {id}) {categorie.name}</h1>
            <div>Todo vidéo iframe : url={categorie.video}</div>
            <Link to="/exercices">
                <button>Record yourself with some excercices</button>
            </Link>
		</div>
	);
};
