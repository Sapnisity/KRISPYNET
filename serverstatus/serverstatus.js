async function getServerStatus() {
	try {
		const response = await fetch(
			'https://api.mcsrvstat.us/3/95.111.244.94',
			{
				method: 'GET',
			},
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}

getServerStatus().then(data => {
	console.log(data);

	const a = document.createElement('a');

	const b = document.createElement('b');

	const online = document.createElement('a');
	if (data.online != true) {
		online.innerHTML = `<style> strong {color:red;} </style> <strong>Offline</strong>`;
		b.append(...[online]);
	}
	else {
		online.innerHTML = `<style> strong {color:#66cc00;}</style> <strong>Online</strong>`;

		const players = document.createElement('a');
		players.innerHTML = `<bdi>${data.players.online}/${data.players.max}</bdi>`;

		b.append(...[online, players]);
	}
	
	a.appendChild(b);

	const container = document.getElementById('container');
	container.appendChild(b);
});
