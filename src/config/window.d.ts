export type Config = {
	endpoints: {};
};

declare global {
	interface Window {
		config: Config;
	}
}
