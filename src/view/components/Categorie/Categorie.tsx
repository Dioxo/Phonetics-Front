import React from "react";
import { useParams } from "react-router-dom";
import Link from "../../common/Link";

export const Categorie = () => {
	const categories = [
		{
			name: "The big round O",
			video: "https://preprod.julien-giraud.fr/anglais/1-The-big-round-O.mp4",
			exercices: [
				{
					caption: "Also the slow tomato is a hero",
					audio: "https://preprod.julien-giraud.fr/anglais/1-Also-the-tomato.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/1-Also-the-tomato.png",
				},
				{
					caption: "Go to the window, I'll know about the capuccino",
					audio: "https://preprod.julien-giraud.fr/anglais/1-Go-to-the-window.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/1-Go-to-the-window.png",
				},
			],
		},
		{
			name: "The non-rhotic R",
			video: "https://preprod.julien-giraud.fr/anglais/2-The-non-rhotic-O.mp4",
			exercices: [
				{
					caption: "China is a big country",
					audio: "https://preprod.julien-giraud.fr/anglais/2-china-is-a-big.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/2-china-is-a-big.png",
				},
				{
					caption: "Low and order",
					audio: "https://preprod.julien-giraud.fr/anglais/2-low-and-order.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/2-low-and-order.png",
				},
				{
					caption: "My mother's bird was murdered",
					audio: "https://preprod.julien-giraud.fr/anglais/2-My-mother_ss-bird.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/2-My-mother_ss-bird.png",
				},
			],
		},
		{
			name: "The A in CAT",
			video: "https://preprod.julien-giraud.fr/anglais/3-The-A-in-cat.mp4",
			exercices: [
				{
					caption: "The lack, the nack, it's a hack, the sack",
					audio: "https://preprod.julien-giraud.fr/anglais/3-The-lack.ogg",
					picture: "https://preprod.julien-giraud.fr/anglais/3-The-lack.png",
				},
				{
					caption: "Zlack was back and his black cat was in the flack",
					audio: "https://preprod.julien-giraud.fr/anglais/3-Zack-blak.ogg",
					picture: "https://preprod.julien-giraud.fr/anglais/3-Zack-blak.png",
				},
			],
		},
		{
			name: "A T is a T",
			video: "https://preprod.julien-giraud.fr/anglais/4-A-T-is-a-T.mp4",
			exercices: [
				{
					caption: "Attitude, fatter",
					audio: "https://preprod.julien-giraud.fr/anglais/4-Attitude-fatter.mp3",
					picture:
						"https://preprod.julien-giraud.fr/anglais/4-Attitude-fatter.png",
				},
			],
		},
		{
			name: "The long A",
			video: "https://preprod.julien-giraud.fr/anglais/5-The-long-A-sound.mp4",
			exercices: [
				{
					caption: "Ask, fast, after",
					audio: "https://preprod.julien-giraud.fr/anglais/5-Ask-fast-after.mp3",
					picture:
						"https://preprod.julien-giraud.fr/anglais/5-Ask-fast-after.png",
				},
			],
		},
		{
			name: "The short O",
			video: "https://preprod.julien-giraud.fr/anglais/6-The-short-O-sound.mp4",
			exercices: [
				{
					caption: "Today the water was a bit slow",
					audio: "https://preprod.julien-giraud.fr/anglais/6-today-the-water.ogg",
					picture:
						"https://preprod.julien-giraud.fr/anglais/6-today-the-water.png",
				},
			],
		},
	];

	const { id } = useParams();
	const categorie = categories[Number(id)];

	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1>
				Short videos – {id}) {categorie.name}
			</h1>
			<video controls width="60%">
				<source src={categorie.video} type="video/mp4" />
			</video>
			<Link to={"/exercice/" + id} text="Record yourself with some excercices" />
		</div>
	);
};
