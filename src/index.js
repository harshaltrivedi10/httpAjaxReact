import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// set headers for common request/responses
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
// headers for specific request (post)
axios.defaults.headers.post['Content-Type'] = "application/json";

var requestInterceptor = axios.interceptors.request.use(requestConfig => {
    // Can edit request headers, that is what this is used for!!!
    console.log(requestConfig);
    return requestConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

var responseInterceptor = axios.interceptors.response.use(responseConfig => {
    // Can edit response headers, that is what this is used for!!!
    console.log(responseConfig);
    return responseConfig;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// removing interceptors
axios.interceptors.request.eject(requestInterceptor);
axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
