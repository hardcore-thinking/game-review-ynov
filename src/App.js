import React from 'react';

import './App.css';
import Header from './Header.js';
import Home from './Home.js';

export let GlobalContext = React.createContext(null);

function App() {
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

export default App;
