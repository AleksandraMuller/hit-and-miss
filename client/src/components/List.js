import React from 'react';

const List = ({ messages }) => {
	const showList = messages.map(({ _id, message, addedBy }) => {
		return (
			<div key={_id}>
				<h2>{message}</h2>
				<p>{addedBy}</p>
			</div>
		);
	});
	return <div>{showList}</div>;
};

export default List;
