import axios from 'axios';
import queryString from 'query-string';

const axiosAdmin = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Replace with your actual API base URL
    paramsSerializer: params => queryString.stringify(params),
});


axiosAdmin.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log('Token added to request:', token);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosAdmin;