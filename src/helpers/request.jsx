const BASE_URL = 'https://rickandmortyapi.com';

export const request = async (url, options) => {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const result_1 = await response.json();

  return result_1.results;
}
