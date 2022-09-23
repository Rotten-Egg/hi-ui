<!--
 * @Description: hi-radio
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-02 11:25:31
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-23 14:35:03
-->
<template>
    <label class="hi-radio-wrapper">
        <span :class="[
            'hi-radio',
            (checked === value || checked) && 'hi-radio-checked',
            disabled && 'hi-radio-disabled'
        ]"
        >
            <input
                v-model="checked"
                @change="onChange"
                :value="value"
                :disabled="disabled"
                type="radio"
                class="hi-radio-input"
            >
            <span class="hi-radio-inner"></span>
        </span>
        <span>
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'HiRadio',
    props: {
        checked: null,
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    setup (props, {emit}) {
        function onChange(e) {
            console.log(e.target.checked)
            
            // emit('update:checked', e.target.checked)
            emit('change', e.target.checked)
        }
        return {
            onChange,
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>