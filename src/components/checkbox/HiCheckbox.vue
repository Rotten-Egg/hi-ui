<!--
 * @Description: hi-checkbox
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-08-31 11:40:32
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-01 19:10:18
-->
<template>
    <label class="hi-checkbox-wrapper">
        <span
            :class="[
                'hi-checkbox',
                checked && 'hi-checkbox-checked',
                checkState === 1 && 'hi-checkbox-indeterminate',
                checked || checkState === 2 && 'hi-checkbox-checked'
            ]"
        >
            <input
                @change="change"
                v-model="checked"
                type="checkbox"
                class="hi-checkbox-input"
            />
            <span class="hi-checkbox-inner"></span>
        </span>
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'HiCheckbox',
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        // 0 未选中 1 选中 2 全选
        checkState: {
            type: Number,
            default: 0
        }
    },
    setup (props, {emit}) {
        function change(e){
            emit('update:checked', e.target.checked)
            emit('onChange', e.target.checked)
        }
        return {
            change
        }
    }
}
</script>

<style lang="less" scoped>
@import url('./css/index.less');
</style>