import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AudioRecorder } from "../AudioRecorder/AudioRecorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import PropTypes from "prop-types";
import WaveSurfer from "wavesurfer.js";

const Waveform = ({ audio }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const waveSurferRef = useRef<WaveSurfer | null>({
		isPlaying: () => false,
	} as WaveSurfer);

	const [isPlaying, toggleIsPlaying] = useState(false);

	useEffect(() => {
		let waveSurfer: WaveSurfer | null = null;
		if (containerRef.current) {
			waveSurfer = WaveSurfer.create({
				container: containerRef.current,
			});
			waveSurfer.load(audio);
			waveSurfer.on("ready", () => {
				waveSurferRef.current = waveSurfer;
			});
		}

		return () => {
			if (waveSurfer) waveSurfer.destroy();
		};
	}, [audio]);

	return (
		<div style={{ width: "50%", height: "200px" }}>
			<div ref={containerRef} />

			<span
				style={{ display: "block", textAlign: "center" }}
				onClick={() => {
					waveSurferRef.current?.playPause();
					toggleIsPlaying(waveSurferRef.current?.isPlaying() || false);
				}}
			>
				{isPlaying ? (
					<PauseCircleIcon color="secondary" fontSize="large" />
				) : (
					<PlayCircleOutlineIcon color="primary" fontSize="large" />
				)}
			</span>
		</div>
	);
};

Waveform.propTypes = {
	audio: PropTypes.string.isRequired,
};

export default Waveform;

export const Exercice = () => {
	const categories = [
		{
			name: "The big round O",
			video: "https://www.preprod.julien-giraud.fr/anglais/1-The-big-round-O.mp4",
			exercices: [
				{
					caption: "Also the slow tomato is a hero",
					audio: "https://www.preprod.julien-giraud.fr/anglais/1-Also-the-tomato.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/1-Also-the-tomato.png",
				},
				{
					caption: "Go to the window, I'll know about the capuccino",
					audio: "https://www.preprod.julien-giraud.fr/anglais/1-Go-to-the-window.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/1-Go-to-the-window.png",
				},
			],
		},
		{
			name: "The non-rhotic R",
			video: "https://www.preprod.julien-giraud.fr/anglais/2-The-non-rhotic-O.mp4",
			exercices: [
				{
					caption: "China is a big country",
					audio: "https://www.preprod.julien-giraud.fr/anglais/2-china-is-a-big.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/2-china-is-a-big.png",
				},
				{
					caption: "Low and order",
					audio: "https://www.preprod.julien-giraud.fr/anglais/2-low-and-order.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/2-low-and-order.png",
				},
				{
					caption: "My mother's bird was murdered",
					audio: "https://www.preprod.julien-giraud.fr/anglais/2-My-mother_ss-bird.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/2-My-mother_ss-bird.png",
				},
			],
		},
		{
			name: "The A in CAT",
			video: "https://www.preprod.julien-giraud.fr/anglais/3-The-A-in-cat.mp4",
			exercices: [
				{
					caption: "The lack, the nack, it's a hack, the sack",
					audio: "https://www.preprod.julien-giraud.fr/anglais/3-The-lack.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/3-The-lack.png",
				},
				{
					caption: "Zlack was back and his black cat was in the flack",
					audio: "https://www.preprod.julien-giraud.fr/anglais/3-Zack-blak.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/3-Zack-blak.png",
				},
			],
		},
		{
			name: "A T is a T",
			video: "https://www.preprod.julien-giraud.fr/anglais/4-A-T-is-a-T.mp4",
			exercices: [
				{
					caption: "Attitude, fatter",
					audio: "https://www.preprod.julien-giraud.fr/anglais/4-Attitude-fatter.mp3",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/4-Attitude-fatter.png",
				},
			],
		},
		{
			name: "The long A",
			video: "https://www.preprod.julien-giraud.fr/anglais/5-The-long-A-sound.mp4",
			exercices: [
				{
					caption: "Ask, fast, after",
					audio: "https://www.preprod.julien-giraud.fr/anglais/5-Ask-fast-after.mp3",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/5-Ask-fast-after.png",
				},
			],
		},
		{
			name: "The short O",
			video: "https://www.preprod.julien-giraud.fr/anglais/6-The-short-O-sound.mp4",
			exercices: [
				{
					caption: "Today the water was a bit slow",
					audio: "https://www.preprod.julien-giraud.fr/anglais/6-today-the-water.ogg",
					picture:
						"https://www.preprod.julien-giraud.fr/anglais/6-today-the-water.png",
				},
			],
		},
	];

	const { id } = useParams();
	const categorie = categories[Number(id)];

	return (
		<div>
			<h1>
				Exercices – {id}) {categorie.name}
			</h1>
			{categorie.exercices.map((exercice, i) => (
				<div className="exercice" key={i}>
					<img
						style={{ width: "50%", height: "200px" }}
						alt="prosody's image"
						src={exercice.picture}
					/>
					<p>{exercice.caption}</p>

					<Waveform audio={exercice.audio} />
					<AudioRecorder exerciceNumber={i} />
				</div>
			))}
		</div>
	);
};
