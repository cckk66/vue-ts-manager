import request from '@/utils/request';

// ��ҳ��ѯ
export const getSysGroupPage = (queryCondition: any) => {
    return request({
        url: '/SysGroup/sysGroupPage',
        method: 'post',
        data: queryCondition,
    })
}