import axios from 'axios';
import queryString from 'query-string';

export const IS_SERVER = typeof window === 'undefined';

const baseUrl = 'https://vaccine-validator-demo.herokuapp.com/api/';
export const getToken = () => !IS_SERVER && localStorage.getItem('token');

const axiosClient = axios.create({
    paramsSerializer: (params) => queryString.stringify({ params }),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: baseUrl,
});

axiosClient.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
        },
    };
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        if (!err.response) {
            console.error('Error! there is something wrong with the network...');
        }
        throw err;
    },
);

export default axiosClient;
