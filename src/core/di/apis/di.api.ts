import Axios from "axios";
import { Container } from "inversify";
import { AppProps } from "../../../view/common/AppContainer";
import { ProsodyApi } from "../../apis/prosody/ProsodyApi";

export function importApis(container: Container, endpoints: AppProps["endpoints"]) {
	container
		.bind(ProsodyApi)
		.toConstantValue(
			new ProsodyApi(endpoints.prosodyApi, Axios.create({ transformResponse: [] }))
		);
}
