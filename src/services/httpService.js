import axios from "axios";
import {toast} from 'react-toastify';
import { Raven } from 'raven-js';

axios.interceptors.response.use(resp =>{
    toast.success("Successfully !")
    return Promise.resolve(resp)
}, error =>{
    toast.error("An unexpected error occurred.");
    console.log('INTERCEPTOR CALLED');
    console.log(error);
    
    Raven.captureExceptio(error)

    return Promise.reject();

});

export default {
    get: axios.get,
    pos: axios.post,
    put: axios.put,
    delete: axios.delete
    
}