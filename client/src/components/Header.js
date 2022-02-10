import React from 'react';
import styled from 'styled-components';
import { deleteAll } from '../services/services';

const Container = styled.div`
	margin: 0 auto;
	font-family: 'News Cycle', sans-serif;
	width: 50%;
	padding-top: 2rem;
	margin-bottom: 2rem;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;
const StyledButton = styled.button`
	padding: 1rem 5rem;
	cursor: pointer;
	color: #3db2ff;
	border: 2px #3db2ff solid;
	background: #fff;
`;
const Title = styled.h1`
	text-align: center;
	margin-bottom: 1rem;
	color: #3db2ff;
`;

const Header = ({ chooseRandom }) => {
	return (
		<Container>
			<Title>RANDOMIZER</Title>
			<ButtonContainer>
				<StyledButton onClick={chooseRandom}>Randomize now!</StyledButton>
				<StyledButton onClick={deleteAll}>Delete all results</StyledButton>
			</ButtonContainer>
		</Container>
	);
};

export default Header;
