// eslint-disable-next-line no-undef
const config = require('../config');

test('Request status code should be 200', async () => {
	// let actualResponseCode;
	try {
		response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(200);
});

test('Response body contains expected returns for GET request', async () => {
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = await response.json();
	}  catch (error) {
		console.error(error);
	}

	expect(data[0]["name"]).toBe("Everything You Need");
});
