import React from 'react';

import './App.css';
import Header from './Header.js';
import Home from './Home.js';

export const UserContext = React.createContext(null);	

function App() {
	const [attemptLogin, setAttemptLogin] = React.useState(false);

	return (
		<>
			<UserContext.Provider value={{attemptLogin, setAttemptLogin}}>
				<Header />
				<Home />
			</UserContext.Provider>
		</>
	);
}

export default App;
