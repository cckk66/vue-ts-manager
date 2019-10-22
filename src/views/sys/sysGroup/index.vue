<template>
    <el-container>
        <el-header ref="tb_header">
            <el-form ref="searcheForm" :model="searcheForm" class="demo-form-inline el-form--inline">
                <el-form-item label="活动名称">
                    <el-input v-model="searcheFormname"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="searcheFormregion" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="searcheFormdate1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="searcheFormdate2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="searcheFormdelivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="searcheFormtype">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="searcheFormresource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-header>
        <el-main ref="tb_main" :style="{height:tbMainHeight}">
            <el-table :data="tableData" ref="mytable" :max-height="tableHeight">
                <el-table-column prop="date" label="日期" width="140">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>

        </el-main>
        <el-footer ref="tb_footer">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage4"
                           :page-sizes="[100, 200, 300, 400]"
                           :page-size="100"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="400">
            </el-pagination>
        </el-footer>

    </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class Table extends Vue {
        // 查询条件
        public searcheForm: any = {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        }
        // 表格数据
        public tableData: any = [];

        // 页面主页高
        public tbMainHeight: string = '800px';

        // table高
        public tableHeight: number = 0;

        // 页面高
        get pageHeight() {
            return document.body.offsetHeight;
        }
        //  分页信息
        private handleSizeChange(val: number): void {
            console.log(`每页 ${val} 条`);
        }

        private handleCurrentChange(val: number): void {
            console.log(`当前页: ${val}`);
        }

        // 创建后
        mounted() {
            //this.$nextTick(() => {
            //    debugger
            //    const pageHeight = document.body.offsetHeight;
            //    let tbMain = this.$refs.tb_main as HTMLElement;
            //    tbMain.style.height = (pageHeight - 150) + 'px';
            //});
            const This = this;
            this.$nextTick(() => {
                let tbHeader = This.$refs.tb_header as HTMLElement;
                let tbFooter = This.$refs.tb_footer as HTMLElement;

                const IntervalHeight = 80;// 间隔高度
                const thisHeight = (This.pageHeight - tbHeader["$el"].offsetHeight - tbFooter["$el"].offsetHeight - IntervalHeight);
                This.tbMainHeight = thisHeight + 'px';
                This.tableHeight = (thisHeight - 20);
            });
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            this.tableData = Array(100).fill(item);
        }

    }
</script>
<style lang="less" scoped>

    .el-header {
        color: #333;
        margin: 10px;
        height: auto !important;
        text-align: left
    }

    .el-footer {
        height: auto !important;
        text-align:right
    }

    .el-main {
        color: #333;
        text-align: center;
        padding: 5px 10px 5px 10px !important;
    }

    

</style>
<style>
    /* 滚动条的整体样式 */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    /* 滚动条的滚动轨迹 */

    ::-webkit-scrollbar-track {
        border-radius: 8px;
        /*background-color: hotpink;*/
        -webkit-box-shadow: 0 0 5px rgba(0,0,0,0.2) inset;
    }
    /* 滚动条上面的小滑块 */

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        /*background-color: pink;*/
    }
</style>