import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const postFormData = data => {
  return axios.post(`${baseUrl}/form`, data);
};