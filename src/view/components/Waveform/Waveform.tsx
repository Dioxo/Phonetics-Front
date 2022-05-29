import WaveSurfer from "wavesurfer.js";

import React, { useEffect, useRef, useState } from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

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

			const blob = new Blob([audio]);
			var URLObject = window.webkitURL || window.URL;
			const blob_url = URLObject.createObjectURL(blob);
			waveSurfer.load(new Audio("data:audio/mp3;base64," + audio));
			//waveSurfer.load(audio);
			waveSurfer.on("ready", () => {
				waveSurferRef.current = waveSurfer;
			});
		}

		return () => {
			if (waveSurfer) waveSurfer.destroy();
		};
	}, [audio]);

	return (
		<div style={{ width: "500px", height: "200px" }}>
			<div ref={containerRef} />

			<span
				style={{ display: "block", textAlign: "center" }}
				onClick={() => {
					if (waveSurferRef.current) {
						waveSurferRef.current?.playPause();
						toggleIsPlaying(waveSurferRef.current?.isPlaying() || false);
					}
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
export default Waveform;
