import React from 'react';
import { addMessage } from '../services/services';
import styled from 'styled-components';

const Container = styled.div`
	background: #3db2ff;
	color: #fff;
	font-family: 'News Cycle', sans-serif;
	padding: 3rem 2rem;
	border-radius: 50% 50% 0 0;
`;
const InputField = styled.input`
	font-family: 'News Cycle', sans-serif;
	border: none;
	border-radius: 1rem;
	padding: 0.5rem;
	width: 100%;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;
const Label = styled.label`
	font-size: 1.5rem;
	margin-right: 2rem;
`;

const StyledButton = styled.button`
	padding: 1rem 5rem;
	cursor: pointer;
	color: #ffa944;
	border: 2px #ffa944 solid;
	background: #fff;
	font-family: 'News Cycle', sans-serif;
	margin-top: 2rem;
	:hover {
		background: #ffefdd;
	}
`;

const Input = ({ game, setGame, name, setName, messages, setMessages }) => {
	return (
		<Container>
			<form
				onSubmit={(e) =>
					addMessage(game, name, setGame, setName, messages, setMessages, e)
				}>
				<div>
					<Label htmlFor='game'>Insert item</Label>
					<InputField
						type='text'
						id='game'
						value={game}
						onChange={({ target }) => setGame(target.value)}></InputField>
				</div>
				<div>
					<Label htmlFor='name'>Insert your name</Label>
					<InputField
						type='text'
						id='name'
						value={name}
						onChange={({ target }) => setName(target.value)}></InputField>
				</div>
				<StyledButton type='submit'>Add to randomizer</StyledButton>
			</form>
		</Container>
	);
};

export default Input;
