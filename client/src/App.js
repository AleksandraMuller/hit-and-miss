import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import { getMessages } from './services/services';

const App = () => {
	const [game, setGame] = useState('');
	const [name, setName] = useState('');
	const [randomMessage, setRandomMessage] = useState();
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getMessages(setMessages);
	}, []);

	const chooseRandom = () => {
		const randomValue = messages[Math.floor(Math.random() * messages.length)];
		console.log('RANDOM VALUE', randomValue);
		setRandomMessage(randomValue);
		return randomValue;
	};

	return (
		<div>
			<h1>RANDOMIZE ME YO!</h1>
			<button onClick={chooseRandom}>Randomize now!</button>
			<Input
				game={game}
				setGame={setGame}
				name={name}
				setName={setName}
				messages={messages}
				setMessages={setMessages}
			/>
			<List messages={messages} randomMessage={randomMessage} />
		</div>
	);
};

export default App;
