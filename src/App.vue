<!--
 * @Description: 
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-17 16:16:28
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-11-14 14:38:49
-->
<script setup>
import { computed, reactive, ref, watch } from "vue";

const state = reactive({
  visible: false,
  dataSource: [
          {
            key: '1',
            name: '彭于晏',
            age: 32,
            address: '哈哈哈哈哈',
          },
          {
            key: '2',
            name: '吴彦祖',
            age: 42,
            address: 'giegie',
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
      align: 'center',
      slots: { customRender: 'age' },
    }
]
})
let checked = ref(false)
let radioChecked = ref(true)

let checkedList = ref(['banana'])
let options = ref(['banana', 'apple', 'hami'])
let radioGroup = ref([])
let switchVisible = ref(true)

const radioOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
function fun (e){
  alert(e)
}
function onChange(e) {
  console.log(e)
}
let checkState = computed(() => {
  const checkedState = checkedList.value.length
  const optionState = options.value.length
  if (checkedState < optionState && checkedState > 0) return 1
  if (checkedState === optionState) return 2
  checked.value = false
  return 0
})
function onCheckAllChange(e) {
  console.log('e', e)
  checkedList.value = e ? options.value : []
}
</script>

<template>
  <div class="but">
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
  </div>
  <hr>
  <hi-table
    :columns="state.columns"
    :data-source="state.dataSource"
    :rowCheckbox="true"
    @rowSelection="onChange"
  >
    <template #age >
      <div style="display: flex">
        <hi-button @click="fun" type="link">查看</hi-button>
        <hi-button @click="fun" type="link">编辑</hi-button>
      </div>
      
    </template>
  </hi-table>
  <hr>
  <hi-checkbox
    v-model:checked="checked"
    :checkState="checkState"
    @onChange="onCheckAllChange"
  >
    你好， {{checkedList}}
  </hi-checkbox><br/>
  <hi-checkbox-group
    v-model:value="checkedList"
    :options="options"
  >
    <template #label="{item}">
      {{item}}
    </template>
  </hi-checkbox-group>
  <hr>
  <hi-radio value="One" v-model:checked="radioChecked">
    hello
  </hi-radio>
  <hi-radio value="Three" disabled v-model:checked="radioChecked">
    hi
  </hi-radio>
  <br>
  <hi-radio-group v-model:value="radioGroup" :options="radioOptions">
  </hi-radio-group>value:{{radioGroup}}
  <hr>
  <hi-switch v-model:checked="switchVisible"></hi-switch> checked: {{switchVisible}}
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

<style lang="less" scoped>
.but {
  button {
    margin-right: 15px;
  }
}
</style>
