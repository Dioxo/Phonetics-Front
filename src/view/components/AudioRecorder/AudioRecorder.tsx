import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store";
import { blobToBase64, getProsody } from "../../../store/module/prosody/prosody.actions";
import Waveform from "../Waveform/Waveform";

export const AudioRecorder = ({ exerciceNumber }) => {
	const images = useAppSelector((state) => state.prosodyReducer.imgResult);
	const dispatch = useDispatch();

	const [isRecording, setIsRecording] = React.useState(false);

	let rec = React.useRef<MediaRecorder | null>(null);
	const [audioChunks, setAudioChunks] = React.useState<Blob[]>([]);

	const onStart = React.useCallback(async () => {
		setIsRecording(true);
		const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

		rec.current = new MediaRecorder(stream);
		rec.current.ondataavailable = (e) => {
			const newChunks = [...audioChunks, e.data];
			setAudioChunks(newChunks);
			if (rec.current?.state === "inactive") {
				dispatch(getProsody({ exerciceNumber, audioBlob: new Blob(newChunks) }));
				// remove stream tracks
				stream.getTracks().forEach(function (track) {
					track.stop();
				});
			}
		};
		rec.current.start();
	}, []);

	const [audioBase64, setAudioBase64] = React.useState<string>();

	React.useEffect(() => {
		(async () => {
			if (audioChunks.length > 0)
				setAudioBase64(await blobToBase64(audioChunks[0]));
		})();
	}, [audioChunks]);

	return (
		<div>
			<button
				onClick={
					!isRecording
						? onStart
						: () => {
								rec.current?.stop();
								setIsRecording(false);
						  }
				}
			>
				{!isRecording ? "Start Recording yourself !" : "Stop Recording"}
			</button>
			<div>
				{images[exerciceNumber] && (
					<img
						style={{ width: "500px" }}
						src={images[exerciceNumber]}
						alt="audio image"
					/>
				)}
			</div>

			{audioBase64 && (
				<Waveform
					audio={audioBase64.replace("data:audio/webm;codecs=opus;base64,", "")}
				/>
			)}
		</div>
	);
};
