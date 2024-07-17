import React from 'react';

import './Header.css'
import { UserContext } from './App.js';

export default function Header() {
	const [attemptLogin, setAttemptLogin] = React.useState(false);
	const userContext = React.useContext(UserContext);

	return (
		<>
			<div id="Header">
				<div id="Title">
					<h1> Game Review </h1>
				</div>
				<div id="Options">
					<button id="Register"> Register </button>
					<button id="Login" onClick={() => {
						userContext.setAttemptLogin(true);
					}}> Login </button>
				</div>
			</div>
			
		</>
	);
}
