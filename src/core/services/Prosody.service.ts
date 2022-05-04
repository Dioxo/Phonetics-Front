import { inject, injectable } from "inversify";
import { AudioBase64, ProsodyApi, ProsodyImageBase64 } from "../apis/prosody/ProsodyApi";
import { Log } from "../utils/decorators/logger";
import { getLogger } from "../utils/logger";

@injectable()
export class ProsodyService {
	private logger = getLogger(ProsodyService);

	@inject(ProsodyApi)
	private prosodyApi: ProsodyApi;

	@Log.service()
	public getProsody(audio: AudioBase64): Promise<ProsodyImageBase64> {
		return this.prosodyApi.getProsody(audio);
	}
}
