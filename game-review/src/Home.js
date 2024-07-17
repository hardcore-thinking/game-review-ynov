import React from 'react';

import './Home.css';
import { UserContext } from './App.js';

function LoginPopup() {
	const userContext = React.useContext(UserContext);

	function completeLoggingIn(event) {
		event.preventDefault();
	}

	return (
		<div className="LoginPopup">
			<div className="LoginFormWrapper">
				<h2> Login </h2>
				<hr />
				<form method="POST" onSubmit={completeLoggingIn}>
					<label for="Email"> Email </label>
					<input type="email" id="Mail" required />
					<label for="Password"> Password </label>
					<input type="password" id="Password" required />
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	);
}

function GameReview({ name, grade }) {
	const bad = "red";
	const ok = "orange";
	const good = "yellow";
	const great = "green";
	const excellent = "lime";

	const castedGrade = parseInt(grade);
	let gradeBackgroundColor = "";

	if (castedGrade >=  0 && castedGrade <  20) { gradeBackgroundColor = bad; }
	if (castedGrade >= 20 && castedGrade <  40) { gradeBackgroundColor = ok; }
	if (castedGrade >= 40 && castedGrade <  60) { gradeBackgroundColor = good; }
	if (castedGrade >= 60 && castedGrade <  80) { gradeBackgroundColor = great; }
	if (castedGrade >= 80 && castedGrade < 100) { gradeBackgroundColor = excellent; }

	return (
		<>
			<div className="GameReview">
				<img src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MarioKart8_image1600w.jpg"/>
				<h3> {name} </h3>
				<div style={{backgroundColor: gradeBackgroundColor}}> {grade} </div>
			</div>
		</>
	);
}

function HorizontalScrollable({title}) {
	return (
		<>
			<span><h2 className="HorizontalScrollableTitle">{title}</h2></span>
			<div className="HorizontalScrollable">
				<GameReview 
					name="Mario Kart 8"
					grade="80"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="60"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="40"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="20"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="0"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="80"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="60"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="40"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="20"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="0"
				/>
				<GameReview 
					name="Mario Kart 8"
					grade="0"
				/>
			</div>
		</>
	);
}

export default function Home() {
	const userContext = React.useContext(UserContext);
	const [loggedIn, setLoggedIn] = React.useState(false);
	document.body.style.overflow = userContext.attemptLogin ? "hidden" : "scroll";

	return (
		<>
			<div className="Home">
				<HorizontalScrollable title="🔥 Best reviews 🔥" />
				<HorizontalScrollable title="✨  Released lately ✨" />
				<HorizontalScrollable title="💚 Recommended by our team 💚" />
			</div>
			{ userContext.attemptLogin &&
				<LoginPopup />
			}
		</>
	);
}
