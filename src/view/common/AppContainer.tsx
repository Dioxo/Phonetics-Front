import React, { ReactNode } from "react";
import { createContainer } from "../../core/di";
import { Provider } from "react-redux";
import { createAppStore } from "../../store";
import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { theme as defaultTheme } from "../../config/theme";
import { ToastContainer } from "react-toastify";
import { Provider as DiProvider } from "inversify-react";

export type AppProps = {
	endpoints: {
		prosodyApi: string;
	};
	// Theme de l'application
	theme?: Theme;
};

export function AppContainer({
	endpoints,
	children,
	theme,
}: AppProps & {
	children: ReactNode;
}) {
	const container = React.useMemo(() => {
		return createContainer(endpoints);
	}, [endpoints]);

	const store = React.useMemo(() => createAppStore(container), [container]);

	return (
		<DiProvider container={container}>
			<Provider store={store}>
				<StyledEngineProvider injectFirst>
					<ThemeProvider theme={theme ?? defaultTheme}>
						{children}
						<ToastContainer theme={"colored"} position={"top-right"} />
					</ThemeProvider>
				</StyledEngineProvider>
			</Provider>
		</DiProvider>
	);
}
