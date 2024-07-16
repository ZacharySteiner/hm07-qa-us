
const config = require('../config');

const requestBody = {
    "name": "Square"
}

test('Request status code should be 200', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: "PUT",
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(200);
});

test('Response body contains expected returns for PUT request', async () => {
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/4`, {
			method: "PUT",
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)});
		data = await response.json();
	}  catch (error) {
		console.error(error);
	}

	expect(data["ok"]).toBe(true);
});
