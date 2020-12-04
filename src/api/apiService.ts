import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || '';
const API_KEY = process.env.REACT_APP_API_KEY || '';

// JSON type by default
axios.defaults.headers.post['Content-Type'] = 'application/json';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-api-key': API_KEY,
  },
});

export default instance;
