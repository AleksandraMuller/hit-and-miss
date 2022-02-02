import React from 'react';
import { addMessage } from '../services/services';

const Input = ({ game, setGame, name, setName, messages, setMessages }) => {
	return (
		<div>
			<form
				onSubmit={(e) =>
					addMessage(game, name, setGame, setName, messages, setMessages, e)
				}>
				<label htmlFor='game'>Insert item</label>
				<input
					type='text'
					id='game'
					value={game}
					onChange={({ target }) => setGame(target.value)}></input>
				<label htmlFor='name'>Insert your name</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={({ target }) => setName(target.value)}></input>
				<button type='submit'>Add to randomizer</button>
			</form>
		</div>
	);
};

export default Input;
