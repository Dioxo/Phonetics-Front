import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";
import { getProsody } from "../../../store/module/prosody/prosody.actions";

export const AudioRecorder = ({ exerciceNumber }) => {
	const images = useAppSelector((state) => state.prosodyReducer.imgResult);
	const dispatch = useDispatch();

	let rec: MediaRecorder | null = null;
	const audioChunks: Blob[] = [];

	const onStart = React.useCallback(async () => {
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

		rec = new MediaRecorder(stream);
		rec.ondataavailable = (e) => {
			audioChunks.push(e.data);
			if (rec?.state === "inactive") {
				dispatch(
					getProsody({ exerciceNumber, audioBlob: new Blob(audioChunks) })
				);
			}
		};
		rec.start();
	}, []);

	return (
		<div>
			<button onClick={onStart}>Start Recording</button>
			<button
				onClick={() => {
					rec?.stop();
				}}
			>
				Stop Recording
			</button>
			<div>
				{images[exerciceNumber] && (
					<img src={images[exerciceNumber]} alt="audio image" />
				)}
			</div>
		</div>
	);
};
