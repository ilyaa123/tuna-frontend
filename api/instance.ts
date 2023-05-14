import axios from "axios";

const baseURL = useRuntimeConfig().public.baseUrlApi;

export const instance = axios.create({
    // baseURL: process.env.NUXT_BASE_URL_API,
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const token = () => {
    if (process.client){
        const token = useCookie('se_key');
        console.log("🚀 ~ file: instance.ts:13 ~ client ~ token:", token)
        return token
    } else if (process.server){
        const token = useCookie('se_key');
        console.log("🚀 ~ file: instance.ts:16 ~ server ~ token:", token)
    }
    
}