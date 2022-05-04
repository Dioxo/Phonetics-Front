import { LocalStorageService } from "../../services/localStorage.service";
import { DiKeysService } from "./di.keys.service";
import { Container } from "inversify";
import { ProsodyService } from "../../services/Prosody.service";

export function importServices(container: Container) {
	container.bind(ProsodyService).toSelf();
	container
		.bind<LocalStorageService>(DiKeysService.localStorage.token)
		.toConstantValue(new LocalStorageService("token"));
}
