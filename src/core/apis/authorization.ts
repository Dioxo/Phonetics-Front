import { inject } from "inversify";
import { DiKeysService } from "../di/services/di.keys.service";
import { LocalStorageService } from "../services/localStorage.service";
import { Helper } from "../utils/helper";

/**
 * Configuration class needed in base class.
 * The config is provided to the API client at initialization time.
 * API clients inherit from #AuthorizedApiBase and provide the config.
 */
// eslint-disable-next-line max-classes-per-file

export class IConfig {
	@inject(DiKeysService.localStorage.token)
	private localStorageTokenService: LocalStorageService;

	/**
	 * Returns a valid value for the Authorization header.
	 * Used to dynamically inject the current auth header.
	 */

	// eslint-disable-next-line class-methods-use-this
	get getAuthorization() {
		return `Bearer ${this.localStorageTokenService.retrieve()}`;
	}
}

export class AuthorizedApiBase {
	public readonly transformOptionsTransmitted: (options: any) => any;
	private readonly config: IConfig;

	protected constructor(config: IConfig) {
		this.config = config;
	}

	async transformOptions(options: any): Promise<any> {
		if (this.transformOptionsTransmitted) {
			return Promise.resolve(this.transformOptionsTransmitted(options));
		}

		options.headers = {
			...options.headers,
		};

		if (!Helper.isDev()) {
			// @ts-ignore Authorization n'est pas défini, mais ça fonctionne
			options.headers!.Authorization = this.config.getAuthorization;
		} else {
			// custom Authorization headers
		}

		return Promise.resolve(options);
	}
}
