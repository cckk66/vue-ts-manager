<template>
    <el-container>
        <el-header ref="tb_header">
            <el-form ref="searcheForm" :model="searcheForm" class="demo-form-inline el-form--inline">
                <el-form-item label="名称">
                    <el-input v-model="searcheForm.GroupName"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="searcheForm.Remark"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" size="small" @click="handleSearchFormSubmit">
                        查询
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button icon="el-icon-refresh" size="small" @click="handleSearchFormReset">
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </el-header>
        <el-main ref="tb_main" :style="{height:tbMainHeight}">
            <el-table :data="tableData" ref="mytable" :max-height="tableHeight">
                <el-table-column label="名称" prop="GroupName" sortable="custom">
                    <template slot-scope="scope">
                        {{scope.row.GroupName}}
                    </template>
                </el-table-column>

                <el-table-column label="备注" prop="Remark" sortable="custom" :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                        {{scope.row.Remark}}
                    </template>
                </el-table-column>

                <el-table-column label="创建人" prop="CreatedUserName" :show-overflow-tooltip="true">

                    <template slot-scope="scope">
                        {{scope.row.CreatedUserName}}
                    </template>
                </el-table-column>
                <el-table-column label="创建时间" prop="ContractPhone" :show-overflow-tooltip="true">

                    <template slot-scope="scope">
                        {{scope.row.CreatedAt}}
                    </template>
                </el-table-column>
                <el-table-column label="修改人" prop="UpdatedUserName" :show-overflow-tooltip="true">

                    <template slot-scope="scope">
                        {{scope.row.UpdatedUserName}}
                    </template>
                </el-table-column>
                <el-table-column label="修改时间" prop="UpdatedAt" :show-overflow-tooltip="true">

                    <template slot-scope="scope">
                        {{scope.row.UpdatedAt}}
                    </template>
                </el-table-column>
            </el-table>

        </el-main>
        <el-footer ref="tb_footer">
            <el-pagination :current-page="page.current"
                           :page-size="page.size"
                           :total="page.total"
                           :page-sizes="page.pagesizes"
                           layout="total, sizes, prev, pager, next, jumper"
                           @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"></el-pagination>
        </el-footer>

    </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import * as sysgroupService from '@/services/Sys/sysgroupService';
    @Component
    export default class Table extends Vue {
        // 查询条件
        public searcheForm: any = {
            GroupName: '',
            Remark: '',
        }
        // 表格数据
        public tableData: any = [];
        //表格分页信息
        public page: any = {
            pagesizes: [30, 100, 200, 400],
            current: 1,
            size: 30,
            total: 0,
            IsPage: true
        }
        //表格分页排序信息
        public sort: any = {
            prop: "",
            order: "descending"
        }
        // 页面主页高
        public tbMainHeight: string = '800px';

        // table高
        public tableHeight: number = 0;

        // 页面高
        get pageHeight() {
            return document.body.offsetHeight;
        }
        private handleSizeChange(val: number): void {
            this.page.size = val;
            this.getTableData();
        }
        private handleCurrentChange(val: number): void {
            this.page.current = val;
            this.getTableData();
        }
        protected getTableData(): void {
            sysgroupService.getSysGroupPage(this.PageQuery()).then((data: any) => {
                this.tableData = data.rows;
                this.page.total = data.total;
            })
        }
        private handleSearchFormSubmit(): void{
            this.page.current = 1;
            this.getTableData();
        }
        private handleSearchFormReset(): void{
            const refName = this.$refs.searcheForm as HTMLFormElement;
            if (refName) {
                refName.resetFields();
            }
            this.handleSearchFormSubmit();
        }

        //获取查询条件
        private PageQuery(): any {
            let query = {
                PageIndex: this.page.current, //当前页码
                PageSize: this.page.size, //显示行数
                OrderBy: this.sort.prop, //排序字段
                IsDesc: this.sort.order === "descending", //是否降序
                IsPage: this.sort.IsPage,
                Filter: {}

            };
            if (this.searcheForm) {
                //query["Filter"] = this.$myFreeze(this.searchForm) //自定义查询
                query.Filter = this["$myCopyFreeze"](this.searcheForm) //自定义查询
            }
            return query;
        }

        // 创建后
        mounted() {
            const This = this;
            this.$nextTick(() => {
                let tbHeader: HTMLElement = This.$refs.tb_header as HTMLElement;
                let tbFooter: HTMLElement = This.$refs.tb_footer as HTMLElement;

                const IntervalHeight = 80;// 间隔高度
                const thisHeight = (This.pageHeight - tbHeader["$el"].offsetHeight - tbFooter["$el"].offsetHeight - IntervalHeight);
                This.tbMainHeight = thisHeight + 'px';
                This.tableHeight = (thisHeight - 20);
            });

            this.getTableData();
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
        text-align: right
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