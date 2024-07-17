import React from 'react';

import './App.css';
import Header from './Header.js';
import Home from './Home.js';

export const UserContext = React.createContext(null);	

async function App() {
	const [attemptLogin, setAttemptLogin] = React.useState(false);

	return (
		<>
			<UserContext.Provider value={{attemptLogin, setAttemptLogin}}>
				<Header />
				<Home />
			</UserContext.Provider>
			<div>
				{ await fetch("http://172.28.0.3:8080/games") };
			</div>
		</>
	);
}

export default App;
