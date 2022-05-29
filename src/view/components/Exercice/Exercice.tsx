import React from "react";
import { useParams } from "react-router-dom";
import { AudioRecorder } from "../AudioRecorder/AudioRecorder";
import Waveform from "../Waveform/Waveform";
import { categories } from "./Exercice.constants";

export const Exercice = () => {
	const { id } = useParams();
	console.log({ id });
	const categorie = categories[Number(id)];
	console.log(categorie);

	return (
		<div>
			<h1>
				Exercices – {id}) {categorie.name}
			</h1>
			<div>
				{categorie.exercices.map((exercice, i) => (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
						className="exercice"
						key={i}
					>
						<img
							style={{ width: "500px" }}
							alt="prosody's image"
							src={exercice.picture}
						/>
						<p>{exercice.caption}</p>
						<Waveform audio={exercice.audio} />{" "}
						<AudioRecorder exerciceNumber={i} />
					</div>
				))}
			</div>
		</div>
	);
};
