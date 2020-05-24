import axios from 'axios';

export default function configureAxios(): { requestHandle: number, responseHandle: number } {
    //request
    let requestHandle = axios.interceptors.request.use(requestConfig => {
        return requestConfig;
    }, requestError => {
        //globally log error
        console.log('Request Error', requestError)
        return Promise.reject(requestError);
    });

    //response
    let responseHandle = axios.interceptors.response.use(response => {
        return response;
    }, responseError => {
        //globally log error
        console.log('Response failed:', responseError)
        return Promise.reject(responseError);
    });

    return { requestHandle, responseHandle }
}
