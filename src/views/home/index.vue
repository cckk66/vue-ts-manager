<template>
    <div class="home">
        首页
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import * as  MySignalR from '@/utils/SignalR'
    import { UserModule } from '@/store/modules/user';
    import { getNewSysMessageCount } from '@/services/Sys/sysMessageService';
    @Component
    export default class Home extends Vue {
        //消息对象
        private mySignalR: MySignalR.MySignalR = new MySignalR.MySignalR();

        // 创建后
        mounted() {
            const baseURL = process.env.VUE_APP_URL;
            const This = this as any;
            This.mySignalR.url = baseURL+"/chathub?userId=" + UserModule.userID;
            //广播消息
            This.mySignalR.on("sysMessage", (username: string, message: string) => {

            });
            //指定客户端消息接收
            This.mySignalR.on("sendClientByUser", (username: string, message: string) => {
            });

            This.mySignalR.start().then(() => {
                getNewSysMessageCount().then(m => {

                });
            }).catch((err: string) => {

            });

            //发送
            //This.mySignalR.send("sendUser", This.username, parseInt(This.receiveruserid), This.sendusermessage)
            //    .then(() => This.sendusermessage = "");

        }
    }
</script>
<style lang="less" scoped>

    .home {
        padding: 20px;
    }
</style>
