import request from '@/utils/request';


//�˵���ҳ
export const getSysMenuPage = (queryCondition: any) => {
    return request({
        url: '/sysMenu/sysMenuPage',
        method: 'post',
        data: queryCondition,
    })
}

