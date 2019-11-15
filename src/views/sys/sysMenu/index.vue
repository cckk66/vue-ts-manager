<template>
    <div>
        <myTable>
            <div slot="headerForm" ref="tb_header">
                <el-form ref="searcheForm" :model="searcheForm" class="demo-form-inline el-form--inline">
                    <el-row>
                        <el-col :span="6" style="padding-bottom:10px;text-align:right">
                            <el-button type="primary" @click="add" plain>新增</el-button>
                        </el-col>
                        <el-col :span="6" style="padding-bottom:10px;text-align:right">
                            <el-button type="primary" @click="sortMenu" plain>排序</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div slot="mainTable" ref="tb_main">
                <el-table :data="tableData"
                          style="width: 100%;margin-bottom: 20px;"
                          row-key="ID"
                          border
                          default-expand-all
                          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                    <el-table-column prop="date"
                                     label="ICON"
                                     sortable
                                     width="100">
                        <template slot-scope="scope">
                            <i :class="scope.row.Icon"></i>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Name"
                                     label="名称"
                                     sortable
                                     width="180">
                    </el-table-column>
                    <el-table-column label="操作">
                    </el-table-column>
                </el-table>

            </div>
            <!--<div slot="footerPagination" ref="tb_footer">



        </div>-->
        </myTable>

        <editForm 
                  :dialogSrotVisible="dialogSrotVisible"
                  @refreshTable="refreshTable"
                 />
    </div>
   



</template>
<script lang="ts">
    import baseTable from '@/components/baseTable/index.vue'
    import myTable from '@/components/baseTable/myTable.vue'
    import { Component, Vue } from 'vue-property-decorator';
    import { getSysMenuPage } from '@/services/Sys/sysMenuService';
    import setMenuSort from "./setMenuSort.vue";
    @Component({
        components: {
            myTable,
            setMenuSort
        }
    })
    export default class sysMenuTable extends baseTable {
        //单个分组
        private sysMenu: any = {};
        // 查询条件
        public searcheForm: any = {


        }

        public edit(row: any): void {
            const This = this as any;
            This.sysMenu = row;
            This.dialogVisible = true

        };

        public add(): void {
            const This = this as any;
            This.sysMenu = { ID: 0 };
            This.dialogVisible = true

        };

        public sortMenu(): void {
            const This = this as any;
            This.dialogSrotVisible = true

        };
        public refreshTable(): void {
            const This = this as any;
            This.dialogSrotVisible = false
            This.getTableData();
        };
        public getTableData(): void {
            const This = this as any;

            getSysMenuPage(This.PageQuery()).then((data: any) => {
                This.tableData = data.rows;
                This.page.total = data.total;
            })
        };
        // 创建后
        mounted() {
            const This = this as any;
            this.getTableData()
        }
    }
</script>
