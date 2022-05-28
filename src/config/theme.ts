import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "rgb(0, 127, 255)",
			contrastText: "#FFF",
		},
		secondary: {
			main: "#FF5F00",
		},
		error: {
			main: "rgb(255, 0 ,0)",
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	typography: {
		fontSize: 12,
		h6: {
			textDecoration: "underline",
			fontWeight: "normal",
		},
		body1: {
			fontWeight: "bold",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					"&.MuiPaper-root": {
						backgroundImage: "unset !important",
					},
				},
			},
		},
	},
});
