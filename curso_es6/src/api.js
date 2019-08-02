import axios from 'axios';

//create a configuration for the axios to connect
const api = axios.create({
    baseURL: 'https://api.github.com'
});

export default api;