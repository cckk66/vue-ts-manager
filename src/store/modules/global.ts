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
    //�Զ����ύHeaders
    public requestHeaders: IHeader[] = [];

    @MutationAction({ mutate: ['routers'] })
    async setRouters(rs: any[]) {
        return {
            routers: rs,
        };
    }
    //�Զ�������Headers
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
