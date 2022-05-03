import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#85BE55",
			contrastText: "#FFF",
		},
		secondary: {
			main: "#7986cb",
		},
		error: {
			main: "#ff4400",
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
