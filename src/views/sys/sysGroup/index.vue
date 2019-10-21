<template>
  <div class="table">
    我是动态路由index2
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Table extends Vue {


}
</script>
<style lang="less" scoped>
.table{
  padding: 20px;
}
</style>
