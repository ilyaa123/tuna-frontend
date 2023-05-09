import { instance } from "../instance";

export const registerApi = (data: {
    email: string,
    password: string,
    type: string
}) => instance.post('user/register', {...data}, {headers: {'Accept': '*/*'}});

export const loginApi = (data: {
    email: string,
    pwd: string
}) => instance.post('auth/login', {...data}, {headers: {'Accept': 'application/json'}});

export const logout = () => instance.post('user/logout');

export const getUserById = (id: string | number) => instance.get(`user/${id}`);

export const getProfileById = (id: string | number) => instance.get(`user/${id}/profile`);

export const updateUser = (data: {
    id: string | number,
    password: string,
    email: string
}) => instance.patch('user/:id/', {
    ...data
});

export const blockUser = (id: string | number) => instance.post(`user/${id}/block`);