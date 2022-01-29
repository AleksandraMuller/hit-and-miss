import React from 'react';

const Input = ({ game, setGame, name, setName }) => {
	return (
		<div>
			<form>
				<input
					type='text'
					onChange={({ target }) => setGame(target.value)}></input>
				<input
					type='text'
					onChange={({ target }) => setName(target.value)}></input>
			</form>
		</div>
	);
};

export default Input;
