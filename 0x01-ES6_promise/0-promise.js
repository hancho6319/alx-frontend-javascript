// 0-promise.js


function getResponseFromAPI() {
	return new Promise((resolve) => {
		// Simulate an asynchronous operation using setTimeout
		resolve("true");
	});
}

export default getResponseFromAPI;

