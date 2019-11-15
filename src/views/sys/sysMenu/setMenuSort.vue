
<template>
    <el-dialog title="设置菜单排序"
               :visible.sync="dialogVisible"
               width="500px"
               @open="dialogOpen"
               v-loading="dialogLoding"
               @close="close"
               :close-on-click-modal="closeOnClickModal">

        <el-table :data="list"
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


        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" ref="submitBtn" :disabled="btnDisabled" @click="saveMenuSort">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script lang="ts">
    import Sortable from 'sortablejs'
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { getSysMenuPage } from '@/services/Sys/sysMenuService';
    @Component({
        components: {

        }
    })
    export default class setMenuSort extends Vue {

        //表单是否实现
        @Prop()
        public dialogVisible: boolean = false
      
        private list: any[] = []
        private sortable: Sortable | null = null
        private oldList: number[] = []
        private newList: number[] = []

        public getTableData(): void {
            const This = this as any;

            getSysMenuPage({}).then((data: any) => {
                This.list = data.rows;
            })
        };
        private dialogOpen(): void {

        }

        //设置排序
        private setSort() {
            const el = (this.$refs.draggableTable as Vue).$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0] as HTMLElement
            this.sortable = Sortable.create(el, {
                ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                onEnd: evt => {
                    if (typeof (evt.oldIndex) !== 'undefined' && typeof (evt.newIndex) !== 'undefined') {
                        const targetRow = this.list.splice(evt.oldIndex, 1)[0]
                        this.list.splice(evt.newIndex, 0, targetRow)
                        // for show the changes, you can delete in you code
                        const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
                        this.newList.splice(evt.newIndex, 0, tempIndex)
                    }
                }
            })
        }
        // 创建后
        mounted() {
            const This = this as any;
            this.getTableData();

        }
    }
</script>
