import React from 'react';
import styled from 'styled-components';
import { handleDelete } from '../services/services';

const Container = styled.div`
	background: ${(props) => (props.randomMessageBool ? 'green' : 'white')};
`;

const List = ({ messages, randomMessage }) => {
	const showList = messages.map(({ _id, message, addedBy }) => {
		const randomMessageBool = randomMessage?._id === _id;

		return (
			<Container key={_id} randomMessageBool={randomMessageBool}>
				<h2>{message}</h2>
				<p>{addedBy}</p>
				<button onClick={() => handleDelete(_id)}>Delete</button>
			</Container>
		);
	});
	return <div>{showList}</div>;
};

export default List;
