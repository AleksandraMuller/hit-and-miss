import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';

const App = () => {
	const [game, setGame] = useState(undefined);
	const [name, setName] = useState(undefined);
	return (
		<div>
			<h1>RANDOMIZE ME YO!</h1>
			<Input game={game} setGame={setGame} name={name} setName={setName} />
		</div>
	);
};

export default App;
