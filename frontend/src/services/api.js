import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8801',
});

export default api;
