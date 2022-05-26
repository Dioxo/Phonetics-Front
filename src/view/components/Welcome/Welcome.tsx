import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
	return (
		<div>
			<h1>Let's improve your english pronunciation!</h1>
			<Link to="/explanations">
				<button>Sentences with video explanations</button>
			</Link>
            <Link to="/exercices">
                <button>Exercices</button>
            </Link>
		</div>
	);
};
