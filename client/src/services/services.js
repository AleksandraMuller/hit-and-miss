export const addMessage = (
	game,
	name,
	setGame,
	setName,
	messages,
	setMessages,
	event
) => {
	event.preventDefault();
	fetch(`http://localhost:8080/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			message: game,
			addedBy: name,
		}),
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			const newMessages = [...messages, json];
			setMessages(
				newMessages.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
			);
			setGame('');
			setName('');
		});
};

export const getMessages = (setMessages) => {
	fetch(`http://localhost:8080/`)
		.then((res) => res.json())
		.then((json) => {
			setMessages(json);
		});
};
