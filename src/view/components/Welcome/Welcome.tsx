import React from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import { push } from "redux-first-history";

export const Welcome = () => {
	const [value, setValue] = React.useState(0);
	const dispatch = useAppDispatch();

	const location = useLocation();
	React.useEffect(() => {
		if (
			(location.pathname.includes("/explanation") ||
				location.pathname.includes("/categorie")) &&
			value === 1
		) {
			setValue(0);
		} else if (location.pathname.includes("/exercice") && value === 0) {
			setValue(1);
		}
	}, [location.pathname, value]);
	console.log(location);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div>
			<h1>Let's improve your english pronunciation!</h1>
			<Box>
				<AppBar position="static">
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="secondary"
						textColor="inherit"
						variant="fullWidth"
						aria-label="full width tabs example"
					>
						<Tab
							onClick={() => dispatch(push("/explanations"))}
							label="Explanations"
						/>
						<Tab
							onClick={() => dispatch(push("/exercices"))}
							label="Exercices"
						/>
					</Tabs>
				</AppBar>
			</Box>
			<Outlet />
		</div>
	);
};
