import Axios, { AxiosInstance } from "axios";
import { injectable } from "inversify";

export type AudioBase64 = string;
export type ProsodyImageBase64 = string;

@injectable()
export class ProsodyApi {
	axios: AxiosInstance;
	url: string;

	constructor(url: string, axios: AxiosInstance) {
		this.url = url;
		this.axios = axios;
	}

	public async getProsody(audio: AudioBase64): Promise<ProsodyImageBase64> {
		const { data } = await this.axios.post<Blob>(this.url, audio, {
			responseType: "blob",
			headers: {
				"content-type": "application/octet-stream;base64",
			},
		});
		return URL.createObjectURL(data);
	}
}
