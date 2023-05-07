import cookieUniversal from 'cookie-universal';
import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.NUXT_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const token = () => {
    if (process.client){
        const token =  cookieUniversal().get('token');
        return token;
    } else if (process.server){
        const nuxtApp = useNuxtApp();
        console.log('nuxtApp', nuxtApp);
        return '';
    }
}