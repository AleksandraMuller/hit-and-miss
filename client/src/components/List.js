import React from 'react';
import styled from 'styled-components';
import { handleDelete } from '../services/services';

const Container = styled.div`
	background: ${(props) => (props.randomMessageBool ? '#ffa944' : 'white')};
	margin: 0 auto;
	width: 50%;
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #3db2ff;
`;
const MessageContainer = styled.div`
	color: #6f6f6f;
`;

const StyledButton = styled.button`
	padding: 1rem;
	cursor: pointer;
	color: #f55;
	border: 2px #f55 solid;
	background: #fff;
	font-family: 'News Cycle', sans-serif;
	:hover {
		background: #fdd;
	}
`;

const List = ({ messages, randomMessage }) => {
	const showList = messages.map(({ _id, message, addedBy }) => {
		const randomMessageBool = randomMessage?._id === _id;

		return (
			<Container key={_id} randomMessageBool={randomMessageBool}>
				<MessageContainer>
					<h2>{message}</h2>
					<p>{addedBy}</p>
				</MessageContainer>
				<StyledButton onClick={() => handleDelete(_id)}>X</StyledButton>
			</Container>
		);
	});
	return <div>{showList}</div>;
};

export default List;
