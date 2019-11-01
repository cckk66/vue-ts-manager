import { Module, VuexModule, getModule, MutationAction, Mutation, Action } from 'vuex-module-decorators';
import store from '@/store';
export interface IHeader {
    key: string,
    value: string,
}

export interface IGlobal {
    routers: any[],
    requestHeaders: IHeader[],
}

@Module({ dynamic: true, store, name: 'global' })
class Global extends VuexModule implements IGlobal {
    public routers: any[] = [];
    //自定义提交Headers
    public requestHeaders: IHeader[] = [];

    @MutationAction({ mutate: ['routers'] })
    async setRouters(rs: any[]) {
        return {
            routers: rs,
        };
    }
    //自定义请求Headers
    @Mutation
    setRequestHeaders(rHeaders: IHeader[]) {
        this.requestHeaders = rHeaders
    }

    @Action({ commit: 'setRequestHeaders' })
    clearRequestHeaders(): IHeader[] {
        return [];
    }

}

export const GlobalModule = getModule(Global);
