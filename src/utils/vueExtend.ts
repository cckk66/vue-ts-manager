/*
˵�� �Զ����� ��չvueȫ�ֹ��÷���
���� �¿�
ʱ�� 2018��3��21��11:26:21
*/
import Vue from 'vue'

// ˫������
Vue.prototype.$myFreeze = function (obj: any) {
    if (obj) {
        //let result = Array.isArray(obj) ? [] : {};
        //for (let key in obj) {
        //    if (obj.hasOwnProperty(key)) {
        //        if (typeof obj[key] === 'object') {
        //            result[key] = Vue.prototype.$myFreeze(obj[key]);   //�ݹ鸴��
        //        } else {
        //            result[key] = obj[key];
        //        }
        //    }
        //}
        //return result;
        return JSON.parse(JSON.stringify(obj))
    }
    return obj
}
// ˫������
Vue.prototype.$myCopyFreeze = function (obj: any) {
    if (obj) {
        //let result = Array.isArray(obj) ? [] : {};
        ////for (let key in obj) {
        ////    if (typeof obj[key] === 'object') {
        ////        result[key] = Vue.prototype.$myFreeze(obj[key]);   //�ݹ鸴��
        ////    } else {
        ////        result[key] = obj[key];
        ////    }
        ////}
        //for (var i in o) {

        //}
        //return result;
        return JSON.parse(JSON.stringify(obj))
    }
    return obj
}
Vue.prototype.$GUID = function (): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// �ɹ�
Vue.prototype.$successBox = function (str: string) {
    this.$message({
        message: str,
        type: 'success'
    })
}
// ����
Vue.prototype.$warningBox = function (str: string) {
    this.$message({
        message: str,
        type: 'warning'
    })
}
// ʧ��
Vue.prototype.$errorBox = function (str: string) {
    this.$message.error(str)
}