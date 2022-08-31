<!--
 * @Descrip
  components: { HiButton },tion: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 16:16:28
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-08-31 18:35:41
-->
<script setup>
import { reactive } from "vue";

const state = reactive({
  visible: false,
  dataSource: [
          {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
          },
  ],
  columns:[
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
    { title: 'Column 1', width: 300, dataIndex: 'address', key: '1' },
    { title: 'Column 2', width: 300, dataIndex: 'address', key: '2' },
    { title: 'Column 3', width: 100, dataIndex: 'address', key: '3', nowrap: true },
    { title: 'Column 4', width: 300, dataIndex: 'address', key: '4' },
    { title: 'Column 5', width: 300, dataIndex: 'address', key: '5' },
    { title: 'Column 6', width: 300, dataIndex: 'address', key: '6' },
    { title: 'Column 7', width: 300, dataIndex: 'address', key: '7' },
    { title: 'Column 8', width: 300, dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      slots: { customRender: 'age' },
    }
]
})
function fun (e){
  alert(e)
}
function onChange (e) {
  console.log(e)
}
</script>

<template>
  <hi-button disabled>nia</hi-button>
  <hi-button type="primary" ghost @click="state.visible = true">
    <template #icon>
      <hi-icon type="icon-icon-loading" spin></hi-icon> 
    </template>
    打开弹窗
  </hi-button>
  <hi-button type="danger" size="small" shape="round">nia</hi-button>
  <hi-button type="dashed" size="large" shape="circle">nia</hi-button>
  <hi-button type="link">nia</hi-button>
  <hi-table
    :columns="state.columns"
    :data-source="state.dataSource"
    :rowCheckbox="true"
    @rowSelection="onChange"
  >
    <template #age>
      123<hi-button @click="fun" type="link">你好撒旦索朗多吉阿斯科利家的辣椒水👋</hi-button>
    </template>
  </hi-table>
  <hi-checkbox :checkType="2">
    asdasd
  </hi-checkbox>
  <hi-modal
    title="hellow"
    v-model:visible="state.visible"
    @cancel="state.visible = false"
    maskClosable
  >
  123123
    <!-- <template #footer>
      <div>1</div>
      <div>2</div>
    </template> -->
  </hi-modal>
</template>

<style scoped>

</style>
