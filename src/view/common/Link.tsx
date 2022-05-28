import React from "react";
import { push } from "redux-first-history";
import { useAppDispatch } from "../../store";

const Link = ({ text, to }) => {
	const dispatch = useAppDispatch();
	return (
		<span
			style={{
				textDecoration: "underline rgba(25, 118, 210, 0.4)",
				color: "rgb(25, 118, 210)",
				cursor: "pointer",
			}}
			onClick={() => dispatch(push(to))}
		>
			{text}
		</span>
	);
};

export default Link;
