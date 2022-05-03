import { LocalStorageService } from "../../services/localStorage.service";
import { DiKeysService } from "./di.keys.service";
import { Container } from "inversify";

export function importServices(container: Container) {
	container
		.bind<LocalStorageService>(DiKeysService.localStorage.token)
		.toConstantValue(new LocalStorageService("token"));
}
