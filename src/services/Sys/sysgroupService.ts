import request from '@/utils/request';


// ��ȡ��
export const getsysGroup = (id: number) => {
    return request({
        url: '/sysGroup/getsysGroup?id=' + id,
        method: 'get',
    })
}

//���ַ���
export const saveSysGroup = (data: any) => {
    return request({
        url: data.ID > 0 ?
            "/sysgroup/SysGroupUpdate" :
            '/sysgroup/SysGroupAdd',
        method: 'post',
        data: data,
    })
}

//���ַ���
export const getSysGroupPage = (queryCondition: any) => {
    return request({
        url: '/sysGroup/sysGroupPage',
        method: 'post',
        data: queryCondition,
    })
}


// ��ȡ��
export const getGroupMenuDto = (GroupID: number) => {
    return request({
        url: '/sysGroup/GetGroupMenuDto?GroupID=' + GroupID,
        method: 'get',
    })
}