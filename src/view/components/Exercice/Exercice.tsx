import React from "react";
import { Link, useParams } from "react-router-dom";
import { AudioRecorder } from "../AudioRecorder/AudioRecorder";

export const Exercice = () => {
	const categories = [
		{
			id: 1,
			name: "The big round O",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
		{
			id: 2,
			name: "The non-rhotic R",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
		{
			id: 3,
			name: "The A in CAT",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
		{
			id: 4,
			name: "A T is a T",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
		{
			id: 5,
			name: "The long A",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
		{
			id: 6,
			name: "The short O",
			video: "https://todo.todo",
			exercices: [
				{
					picture: "https://todo-picture.com/1",
					caption: "the first caption",
				},
				{
					picture: "https://todo-picture.com/2",
					caption: "the second caption",
				},
			],
		},
	];

	const { id } = useParams();
	const categorie = categories.filter((c) => c.id.toString() === id)[0];

	return (
		<div>
			<h1>
				Exercices – {id}) {categorie.name}
			</h1>
			{categorie.exercices.map((exercice) => (
				<div className="exercice" key={categorie.exercices.indexOf(exercice)}>
					<img alt="todo image scr" src={exercice.picture} />
					<p>{exercice.caption}</p>
					<AudioRecorder />
				</div>
			))}
		</div>
	);
};
