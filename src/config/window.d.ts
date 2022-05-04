export type Config = {
	endpoints: {
		prosodyApi: string;
	};
};

declare global {
	interface Window {
		config: Config;
	}
}
