/*
说明 自定义插件 扩展vue全局公用方法
作者 陈科
时间 2018年3月21日11:26:21
*/
import Vue from 'vue'

// 双向绑定深拷贝
Vue.prototype.$myFreeze = function (obj: any) {
    if (obj) {
        //let result = Array.isArray(obj) ? [] : {};
        //for (let key in obj) {
        //    if (obj.hasOwnProperty(key)) {
        //        if (typeof obj[key] === 'object') {
        //            result[key] = Vue.prototype.$myFreeze(obj[key]);   //递归复制
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
// 双向绑定深拷贝
Vue.prototype.$myCopyFreeze = function (obj: any) {
    if (obj) {
        //let result = Array.isArray(obj) ? [] : {};
        ////for (let key in obj) {
        ////    if (typeof obj[key] === 'object') {
        ////        result[key] = Vue.prototype.$myFreeze(obj[key]);   //递归复制
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
//        // 双向绑定深拷贝
//        vue.prototype.$myFreeze = function (obj) {
//            if (obj) {
//                let result = Array.isArray(obj) ? [] : {};
//                for (let key in obj) {
//                    if (obj.hasOwnProperty(key)) {
//                        if (typeof obj[key] === 'object') {
//                            result[key] = Vue.prototype.$myFreeze(obj[key]);   //递归复制
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
//        // 双向绑定深拷贝
//        vue.prototype.$myCopyFreeze = function (obj) {
//            if (obj) {
//                let result = Array.isArray(obj) ? [] : {};
//                for (let key in obj) {
//                    if (typeof obj[key] === 'object') {
//                        result[key] = Vue.prototype.$myFreeze(obj[key]);   //递归复制
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