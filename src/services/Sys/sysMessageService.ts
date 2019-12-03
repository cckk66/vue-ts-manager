import request from '@/utils/request';


// ��ȡ��
export const getsysMessage = (id: number) => {
    return request({
        url: '/sysMessage/getsysMessage?id=' + id,
        method: 'get',
    })
}

//���ַ���
export const savesysMessage = (data: any) => {
    return request({
        url: data.ID > 0 ?
            "/sysMessage/sysMessageUpdate" :
            '/sysMessage/sysMessageAdd',
        method: 'post',
        data: data,
    })
}

//���ַ���
export const getsysMessagePage = (queryCondition: any) => {
    return request({
        url: '/sysMessage/sysMessagePage',
        method: 'post',
        data: queryCondition,
    })
}
// ��ȡ��
export const getNewSysMessageCount = () => {
    return request({
        url: '/sysMessage/getNewSysMessageCount',
        method: 'get',
    })
}

