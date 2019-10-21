import { Module, VuexModule, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';

export interface IGlobal {
    routers: any[]
}

@Module({ dynamic: true, store, name: 'global' })
class Global extends VuexModule implements IGlobal {
    public routers: any[] = [];
    @MutationAction({ mutate: ['routers'] })
    async setRouters(routers: any[]) {
        return {
            routers: routers,
        };
    }

}

export const GlobalModule = getModule(Global);
