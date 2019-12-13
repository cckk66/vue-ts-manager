<template>
    <el-dialog title="分组菜单授权"
               :visible="dialogPowerVisible"
               width="500px"
               @open="dialogOpen"
               @close="close"
               :close-on-click-modal="closeOnClickModal">
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


    </el-dialog>



</template>
<script lang="ts">
    import baseTable from '@/components/baseTable/index.vue'
    import myTable from '@/components/baseTable/myTable.vue'
    import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
    import { getGroupMenuDto } from '@/services/Sys/sysgroupService';
    @Component({
        components: {
            myTable

        }
    })
    export default class groupMenuPower extends baseTable {
        // 表单是否实现
        @Prop()
        public dialogPowerVisible: boolean = false;

        @Prop()
        private sysGroup!: any

        // 查询条件
        public searcheForm: any = {


        }
        // 表单关闭
        public closeOnClickModal: boolean = false;

        private dialogOpen(): void {
            const This = this as any;
            this.getTableData();
        }

        public getTableData(): void {
            const This = this as any;

            getGroupMenuDto(This.sysGroup.ID).then((data: any) => {
                This.tableData = data;
                This.page.total = data.length;
            })
        };
        private close(): void {

        }
        // 创建后
        mounted() {

        }
    }
</script>
