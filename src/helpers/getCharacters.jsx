import {request} from './request';

export const getCharacters = (index = 0) => {
  return request(`/api/character/?page=${index}`);
};
