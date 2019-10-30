import request from '@/utils/request';

// ·ÖÒ³²éÑ¯
export const getSysGroupPage = (queryCondition: any) => {
    return request({
        url: '/SysGroup/sysGroupPage',
        method: 'post',
        data: queryCondition,
    })
}