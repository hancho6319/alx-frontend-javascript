import getResponseFromAPI from './0-promise.js';

test('getResponseFromAPI returns a Promise', () => {
  const response = getResponseFromAPI();
  expect(response instanceof Promise).toBe(true);
});

test('getResponseFromAPI resolves to true', () => {
  return getResponseFromAPI().then(data => {
    expect(data).toBe("true");
  });
});

