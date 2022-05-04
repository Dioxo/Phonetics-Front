import { createAction as _createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ExtraTrunkParams } from "../../index";
import { ProsodyService } from "../../../core/services/Prosody.service";

const createAction = <T>(base: string) => _createAction<T>(`prosody/${base}`);

const blobToBase64 = (blob: Blob): Promise<string> => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	return new Promise((resolve) => {
		reader.onloadend = () => {
			resolve(
				(reader.result as string).replace(
					"data:application/octet-stream;base64,",
					""
				)
			);
		};
	});
};

export const getProsody = createAsyncThunk(
	"prosody/getProsodyFromAudio",
	async (audioBlob: Blob, { extra }) => {
		const { container } = extra as ExtraTrunkParams;
		const service = container.get(ProsodyService);
		console.log(service);
		const promise = blobToBase64(audioBlob).then((audio) =>
			service.getProsody(audio)
		);
		return toast.promise(promise, {
			error: "Error while querying prosody service with audio",
			pending: "Getting audio prosody",
		});
	}
);
