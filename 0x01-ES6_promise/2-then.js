// 2-then.js

function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      return new Error('');
    })
    .finally(() => {
      console.log('Got i```a response from the API');
    });
}

export default handleResponseFromAPI;

