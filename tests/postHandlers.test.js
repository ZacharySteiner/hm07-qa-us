
const config = require('../config');

const requestBody = {
    "cardId": 2,
    "name": "Ball"
}

test('Request status code should be 201', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: "POST",
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(201);
});

test('Response body contains expected returns for POST request', async () => {
	let data;
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: "POST",
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(data["name"]).toBe("Ball");
});
