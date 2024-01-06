import axios from 'axios';

const BASE_URL =
  'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/';

export const locationApi = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Accept: 'application/json',
  },
});
