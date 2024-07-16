import { useState } from 'react';

import './Header.css'

export default function Header() {
	const [clickedLogin, setClickedLogin] = useState(false);
	const [clickedRegister, setClickedRegister] = useState(false);

	return (
		<>
			<div id="Header">
				<div id="Title">
					<h1> Game Review </h1>
				</div>
				<div id="Options">
					<button id="Register" onClick={setClickedRegister}>Register</button>
					<button id="Login" onClick={setClickedLogin}>Login</button>
				</div>
			</div>
			
		</>
	);
}
