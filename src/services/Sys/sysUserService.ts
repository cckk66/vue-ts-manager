import request from '@/utils/request';


// ��ȡ��
export const getsysUser = (id: number) => {
    return request({
        url: '/sysUser/getsysUser?id=' + id,
        method: 'get',
    })
}

//���ַ���
export const savesysUser = (data: any) => {
    return request({
        url: data.ID > 0 ?
            "/sysUser/sysUserUpdate" :
            '/sysUser/sysUserAdd',
        method: 'post',
        data: data,
    })
}

//���ַ���
export const getsysUserPage = (queryCondition: any) => {
    return request({
        url: '/sysUser/sysUserPage',
        method: 'post',
        data: queryCondition,
    })
}

