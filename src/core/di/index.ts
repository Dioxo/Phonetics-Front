import { Container } from "inversify";
import { importServices } from "./services/di.service";
import { importApis } from "./apis/di.api";
import { AppProps } from "../../view/common/AppContainer";

export function createContainer(endpoints: AppProps["endpoints"]) {
	const container = new Container({ defaultScope: "Singleton" });
	importApis(container, endpoints);
	importServices(container);
	return container;
}
