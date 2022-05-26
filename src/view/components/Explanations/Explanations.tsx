import React from "react";
import { Link } from "react-router-dom";

export const Explanations = () => {
	return (
		<div>
			<h1>Sentences with video explanations</h1>
            <h2>Two different options just for you</h2>
			<Link to="/categories">
				<button>British pronontiation and explicative videos</button>
			</Link>
            <Link to="/exercices">
                <button>Record yourself with some excercices</button>
            </Link>
		</div>
	);
};
