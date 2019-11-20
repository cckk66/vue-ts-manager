import request from '@/utils/request';


//�˵���ҳ
export const getSysMenuPage = (queryCondition: any) => {
    return request({
        url: '/sysMenu/sysMenuPage',
        method: 'post',
        data: queryCondition,
    })
}

//����˵�����
export const saveMenuSort = (queryCondition: any) => {
    return request({
        url: '/sysMenu/saveMenuSort',
        method: 'post',
        data: queryCondition,
    })
}


