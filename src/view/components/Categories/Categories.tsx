import React from "react";
import { push } from "redux-first-history";
import { useAppDispatch } from "../../../store";
import Link from "../../common/Link";

export const Categories = () => {
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

	const dispatch = useAppDispatch();

	return (
		<div>
			<p>Hello !</p>
			<p>
				Welcome to this new way to learn the English language.
				<br />
				You will be affronted to a completely different methodology of study
				throughout this pronunciation course. <br />
			</p>
			<p>
				You have maybe tried many times to improve your English pronunciation and
				felt like anything have changed. This may happen because you have always
				focused on “sounding more English”, to copy their way to talk and not in
				what really matters, intonation! The English language has some
				particularities in what concerns intonation.
			</p>
			<p>
				You might have heard something called stress words, linking words,
				spelling and other weirds thigs but you might not know what is about or
				how to use it. However, in this case, we will show you a simple way to
				sound more British and how to improve your English skills.
			</p>
			<p>
				This course will present you six simple ways to improve your English
				skills for making you sound more British while talking. You will watch
				some videos, then you will make your own records with our exercises! Our
				exercises are conceived since the prosody perception.
			</p>
			<p>
				You will see a graphic in front of the audio, don’t panic! it is
				completely normal, you will use those graphics as a guide for letting you
				know how to better pronounce some difficult words.
			</p>
			<p>Let’s practice then…</p>
			<h1>Choose what you want to improve 👇</h1>
			<ul>
				{categories.map((categorie, i) => (
					<li key={i}>
						<Link to={"/categorie/" + i} text={categorie.name} />
					</li>
				))}
			</ul>
		</div>
	);
};
