import api from './axiosConfig';

export const getCountries = (payload) => {
  console.log('in getCOuntries api', payload);
  if (payload && payload.length < 3) return [];
  return api.get(`/name/${payload}`).then((res) => {
    return res.data;
  });
};
export const getStates = ({ country }) => {
  api.get(`/state?country=${country}`).then((res) => res.data);
};
export const getCities = ({ state }) => {
  api.get(`/state?country=${country},city=${state}`).then((res) => res.data);
};
