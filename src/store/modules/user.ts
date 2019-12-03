import { Module, VuexModule, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { login, logout } from '@/services/login';
import { setToken, removeToken, getToken } from '@/utils/auth';

export interface IUserState {
    token: string;
    loginName: string;
    niceName: string;
    userID: number;
    menuList: any[];
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
    token: string = '';
    loginName: string = '';
    niceName: string = '';
    userID: number = 0;
    menuList: any[] = [];

    @MutationAction({ mutate: ['token', 'loginName', 'niceName', 'userID','menuList'] })
    async Login(userInfo: { username: string, password: string }) {
        const username = userInfo.username.trim();
        const data: any = await login(username, userInfo.password);
        setToken(data.token);
        return {
            token: data.token,
            loginName: data.loginName,
            niceName: data.niceName,
            userID: data.ID,
            menuList: data.menuList.data.router,
        };
    }




    @MutationAction({ mutate: ['token', 'loginName', 'niceName', 'userID', 'menuList'] })
    async Logout() {
        await logout;
        removeToken();
        return {
            token: '',
            loginName: '',
            niceName: '',
            userID:0,
            menuList: [],
        };
    }

    @MutationAction({ mutate: ['token', 'loginName', 'niceName', 'userID', 'menuList'] })
    async FedLogout() {
        removeToken();
        return {
            token: '',
            loginName: '',
            niceName: '',
            userID: 0,
            menuList: [],
        };
    }
}

export const UserModule = getModule(User);
