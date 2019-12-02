import { localStorageRouterKey, cookieTokenKey } from '@/utils/constKey';
import Cookies from 'js-cookie';


export function getToken() {
    return Cookies.get(cookieTokenKey);
};

export function setToken(token: string) {
    return Cookies.set(cookieTokenKey, token);
};

export function removeToken() {
    return Cookies.remove(cookieTokenKey);
};


export const setLocalStorage = (name: string, data: any[]) => { // localStorage �洢�������ķ���
    localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name: string) => {
    let lsjson: string | null = localStorage.getItem(name);
    if (lsjson) {
        return JSON.parse(lsjson);
    }
    return [];
};

export const setLocalRouter = (data: any[]) => { // localStorage �洢�������ķ���
    setLocalStorage(localStorageRouterKey, data);
};

export const getLocalRouter = () => {
    return getLocalStorage(localStorageRouterKey);
};



