import axios from 'axios';
import queryString from 'query-string';

const axiosAdmin = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Replace with your actual API base URL
    paramsSerializer: params => queryString.stringify(params),
});


// Không cần thiết
// Sử dụng thằng này khi cần refresh token thôi
// axiosAdmin.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     // Handle errors
//     throw error;
// });

export default axiosAdmin;