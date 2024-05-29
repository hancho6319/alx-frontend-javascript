// 0-promise.js


function getResponseFromAPI() {
	return new promise((resolve, reject) => {
		// Simulate an asynchronous operation using setTimeout
		setTimeout(() => {
			const success = true; // Simulate success or failure
			if (success) {
				resolve("successful");
			}else {
				reject("Error");
			}
		}, 2000); // simulated delay of 2 seconds
	});
}

export default getResponseFromAPI;
