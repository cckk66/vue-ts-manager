import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
const baseURL = process.env.VUE_APP_API_URL;
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000,
});
// Request interceptors
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);
// Response interceptors
service.interceptors.response.use(
    (response) => {
        // Some example codes here:
        // code == 20000: valid
        // code == 50008: invalid token
        // code == 50012: already login in other place
        // code == 50014: token expired
        // code == 60204: account or password is incorrect
        // You can change this part for your own usage.
        return response.data.apiData;
    },
    (error) => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000,
        });
        return Promise.reject(error);
    },
);
export default service;
