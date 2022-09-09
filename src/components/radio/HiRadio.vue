<!--
 * @Description: hi-radio
 * @version: 1.0
 * @Author: 美-王骁凯
 * @Date: 2022-09-02 11:25:31
 * @LastEditors: 美-王骁凯
 * @LastEditTime: 2022-09-02 18:00:33
-->
<template>
    <label class="hi-radio-wrapper">
        <span :class="[
            'hi-radio',
            checked && 'hi-radio-checked'
        ]"
        >
            <input
                v-model="checked"
                @change="change"
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
import { computed, watch } from 'vue'
export default {
    name: 'HiRadio',
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number]
        }
    },
    setup (props, {emit}) {
        function change(e) {
            console.log(e.target.checked)
            
            emit('update:checked', e.target.checked)
            emit('change', e.target.checked)
        }
        return {
            change,
            // innerVal
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../css/public.less');
@import url('./css/index.less');
</style>