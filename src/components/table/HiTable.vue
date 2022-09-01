<!--
 * @Description: hi-table
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-19 19:15:42
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-08-31 18:35:49
-->
<template>
<div style="width: 100%;overflow: scroll;">
    <table class="hi-table">
        <thead>
            <tr>
                <th>
                    <label class="hi-checkbox-wrapper">
                        <span
                            :class="[
                                'hi-checkbox',
                                checkState === 1 && 'hi-checkbox-indeterminate',
                                checkState === 2 && 'hi-checkbox-checked'
                            ]"
                        >
                            <input
                                @click="checkAll"
                                ref="hiCheckboxAll"
                                type="checkbox"
                                class="hi-checkbox-input"
                            />
                            <span class="hi-checkbox-inner"></span>
                        </span>
                    </label>
                </th>
                <th width="50px" align="center">序号</th>
                <th
                    v-for="item in columns"
                    :key="item.key"
                    :width="item.width"
                    :align="item.align"
                    :class="[
                        tdFlex(item.fixed) && 'hi-thead-sticky',
                        `hi-${tdFlex(item.fixed)}`,
                        border && 'hi-boder'
                    ]"
                >
                    {{item.title}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in rowCheckbox ? dataSourceCopy : dataSource" :key="item.key">
                <th>
                    <label class="hi-checkbox-wrapper">
                        <span :class="[
                            'hi-checkbox',
                            item.isChecked && 'hi-checkbox-checked'
                        ]">
                            <input
                                class="hi-checkbox-input"
                                @click="checked($event, item)"
                                ref="hiCheckboxItem"
                                type="checkbox"
                            />
                            <span class="hi-checkbox-inner"></span>
                        </span>
                    </label>
                </th>
                <td align="center">{{index + 1}}</td>
                <td
                    v-for="_item in columns"
                    :key="_item.key"
                    v-bind="_item"
                    :class="[
                        tdFlex(_item.fixed) && 'hi-sticky',
                        `hi-${tdFlex(_item.fixed)}`,
                        _item.nowrap && 'hi-nowrap',
                        border && 'hi-boder'
                    ]"
                    :style="{'max-width': _item.nowrap && _item.width + 'px'}"
                >
                    <slot
                        v-if="_item.slots && _item.slots.hasOwnProperty('customRender')"
                        :name="_item.slots.customRender"
                    ></slot>                
                    <span v-else class="hi-nowrap">
                        {{item[_item.dataIndex]}}
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { ref, watch, getCurrentInstance } from 'vue'
export default {
    name: 'HiTable',
    props: {
        columns: {
            type: Array,
        },
        dataSource: {
            type: Array,
        },
        border: {
            type: Boolean,
            default: false
        },
        rowCheckbox: {
            type: Boolean,
            default: false
        }
    },
    setup (props) {
        let { proxy } = getCurrentInstance()
        const hiCheckboxItem = ref(null)
        const hiCheckboxAll = ref(null)
        // 0 未选中 1 选中 2 全选
        const checkState = ref(0)
        const dataSourceCopy = ref(null)

        watch(() => props.rowCheckbox, (newVal) => {
            if (!newVal) return
            dataSourceCopy.value = JSON.parse(JSON.stringify(props.dataSource))
            dataSourceCopy.value.forEach(item => {
                item.isChecked = false
            })
        }, {immediate: true})

        function tdFlex (flag) {
            if (!flag) return false
            if (typeof flag === 'boolean' && flag) return 'left'
            if (!['left', 'right'].includes(flag)) console.warn('flex只支持left、right')
            return flag
        }

        function checkAll (e) {
            let checked = e.target.checked
            hiCheckboxItem.value && hiCheckboxItem.value.forEach(item => {
                checkState.value = checked ? 2 : 0
                item.checked = checked
            })
            dataSourceCopy.value.forEach(item => {
                item.isChecked = checked
            })
            proxy.$emit('rowSelection', dataSourceCopy.value.filter(i => i.isChecked))
        }
        
        function checked (e, item) {
            item.isChecked = e.target.checked
            proxy.$emit('rowSelection', dataSourceCopy.value.filter(i => i.isChecked))
            let notCheck = hiCheckboxItem.value.filter(i => !i.checked)
            if (!notCheck.length) {
                checkState.value = 2
                hiCheckboxAll.value.checked = true
                return
            }
            if (notCheck.length === hiCheckboxItem.value.length) {
                checkState.value = 0
                hiCheckboxAll.value.checked = false
                return
            }
            checkState.value = 1
        }

        return {
           tdFlex,
           checkAll,
           checked,
           checkState,
           hiCheckboxAll,
           hiCheckboxItem,
           dataSourceCopy
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
@import url('../checkbox/css/index.less');
</style>