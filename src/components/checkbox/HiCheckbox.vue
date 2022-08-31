<!--
 * @Description: hi-checkbox
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-31 11:40:32
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-08-31 14:54:13
-->
<template>
    <label class="hi-checkbox-wrapper">
        <span
            :class="[
                'hi-checkbox',
                checkType === 1 && 'hi-checkbox-indeterminate',
                checkType === 2 && 'hi-checkbox-checked'
            ]"
        >
            <input
                @click="checkboxClick"
                type="checkbox"
                class="hi-checkbox-input"
                :value="value"
            />
            <span class="hi-checkbox-inner"></span>
        </span>
        <span>{{value}}
            <slot></slot>
        </span>
    </label>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
    name: 'HiCheckbox',
    props: {
        checkType: {
            type: Number,
            default: 0
        },
        value: {
            type: [Object, Number, String],
        }
    },
    setup (props) {
        let { proxy } = getCurrentInstance()
        function checkboxClick(e){
            proxy.$emit('change', e)
        }
        return {
            checkboxClick
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./css/index.less');
</style>