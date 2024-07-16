import './Header.css'

export default function Header() {
	let isConnected = true;
	return (
		<>
			<div id="Header">
				<div id="Title">
					<h1> Game Review </h1>
				</div>
				<div id="Options">
					<button id="Register">Register</button>
					<button id="Login">Login</button>
				</div>
			</div>
			
		</>
	);
}
