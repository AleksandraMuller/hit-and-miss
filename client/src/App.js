import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import Header from './components/Header';
import { getMessages, addRandomMessage } from './services/services';
import styled from 'styled-components';

const CardContainer = styled.div`
	width: 50%;
	margin: 0 auto;
	background: #3db2ff;
`;
const BackgroundContainer = styled.div`
	width: 100%;
	background: #3db2ff;
`;

const App = () => {
	const [game, setGame] = useState('');
	const [name, setName] = useState('');
	const [randomMessage, setRandomMessage] = useState();
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getMessages(setMessages);
	}, []);

	const chooseRandom = (e) => {
		const randomValue = messages[Math.floor(Math.random() * messages.length)];
		setRandomMessage(randomValue);
		addRandomMessage(randomValue, e);
		return randomValue;
	};

	return (
		<div>
			<Header chooseRandom={(e) => chooseRandom(e)} />

			<CardContainer>
				<Input
					game={game}
					setGame={setGame}
					name={name}
					setName={setName}
					messages={messages}
					setMessages={setMessages}
				/>
			</CardContainer>
			<BackgroundContainer>
				<List messages={messages} randomMessage={randomMessage} />
			</BackgroundContainer>
		</div>
	);
};

export default App;
