import request from '@/utils/request';


//²Ëµ¥·ÖÒ³
export const getSysMenuPage = (queryCondition: any) => {
    return request({
        url: '/sysMenu/sysMenuPage',
        method: 'post',
        data: queryCondition,
    })
}

