
const config = require('../config');

test('Request status code should be 200', async () => {
	try {
		response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: "DELETE",
			headers: {
			'Content-Type': 'application/json'
	}},);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(200);
});

test('Response body contains expected returns for DELETE request', async () => {
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: "DELETE",
			headers: {
			'Content-Type': 'application/json'
	}});
		data = await response.json();
	}  catch (error) {
		console.error(error);
	}

	expect(data["ok"]).toBe(true);
});
