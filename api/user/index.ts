import { instance } from "../instance";

export const register = (data: {
    email: string,
    password: string,
    type: string
}) => instance.post('user/register', {...data});

export const login = (data: {
    email: string,
    password: string
}) => instance.post('user/login', {...data});

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