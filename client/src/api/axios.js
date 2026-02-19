import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

instance.interceptors.request.use(request => {
    console.log('Starting Request:', request.method.toUpperCase(), request.url);
    console.log('Full URL:', request.baseURL + request.url);
    return request;
});

instance.interceptors.response.use(response => {
    console.log('Response:', response.status);
    return response;
}, error => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
});

export default instance;
