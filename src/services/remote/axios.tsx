import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

export function configureAxios(): { requestHandle: number, responseHandle: number } {

    //request
    let requestHandle = axiosInstance.interceptors.request.use(requestConfig => {
        return requestConfig;
    }, requestError => {
        //globally log error
        console.log('Request Error', requestError)
        return Promise.reject(requestError);
    });

    //response
    let responseHandle = axiosInstance.interceptors.response.use(response => {
        return response;
    }, responseError => {
        //globally log error
        console.log('Response failed:', responseError)
        return Promise.reject(responseError);
    });

    return { requestHandle, responseHandle }
}

export default axiosInstance;