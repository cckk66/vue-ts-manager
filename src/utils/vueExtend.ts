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
//export default {
//    install: function (vue: Vue, options: any) {
//        // ˫������
//        vue.prototype.$myFreeze = function (obj) {
//            if (obj) {
//                let result = Array.isArray(obj) ? [] : {};
//                for (let key in obj) {
//                    if (obj.hasOwnProperty(key)) {
//                        if (typeof obj[key] === 'object') {
//                            result[key] = Vue.prototype.$myFreeze(obj[key]);   //�ݹ鸴��
//                        } else {
//                            result[key] = obj[key];
//                        }
//                    }
//                }
//                return result;
//                //return JSON.parse(JSON.stringify(data))
//            }
//            return obj
//        }
//        // ˫������
//        vue.prototype.$myCopyFreeze = function (obj) {
//            if (obj) {
//                let result = Array.isArray(obj) ? [] : {};
//                for (let key in obj) {
//                    if (typeof obj[key] === 'object') {
//                        result[key] = Vue.prototype.$myFreeze(obj[key]);   //�ݹ鸴��
//                    } else {
//                        result[key] = obj[key];
//                    }
//                }
//                return result;
//                //return JSON.parse(JSON.stringify(data))
//            }
//            return obj
//        }
//    }
//}