import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import { getMessages } from './services/services';

const App = () => {
	const [game, setGame] = useState('');
	const [name, setName] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getMessages(setMessages);
	}, []);

	console.log('GAME', game);
	console.log('NAME', name);
	console.log('MESSAGES', messages);

	return (
		<div>
			<h1>RANDOMIZE ME YO!</h1>
			<Input
				game={game}
				setGame={setGame}
				name={name}
				setName={setName}
				messages={messages}
				setMessages={setMessages}
			/>
			<List messages={messages} />
		</div>
	);
};

export default App;
